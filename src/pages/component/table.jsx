import React, { useEffect } from 'react';
import React from 'react';
// import '../css/Table.css';
function Table(props) {
  const [reLoad, setReLoad] = React.useState(1);
  const [page, setPage] = React.useState(2);
  const [pageLimit, setPageLimite] = React.useState(10);
  const [lastPage, setLastPage] = React.useState(1);
  useEffect(() => {
    setLastPage(Math.ceil(props.data.length / pageLimit));
  }, []);

  useEffect(() => {
    setReLoad(reLoad + 1);
  }, []);

  const genarateHead = () => {
    var heading = Object.keys(props.data[0]);
    return heading.map((each) => {
      return <th>{each}</th>;
    });
  };

  const genarateRow = (data) => {
    return data.map((each) => {
      return <tr> {genarateData(each)}</tr>;
    });
  };

  const displayPage = () => {
    let start = (page - 1) * pageLimit;
    let end = start + pageLimit;
    return genarateRow(props.data.slice(start, end));
  };
  const genarateData = (eachData) => {
    var heading = Object.keys(props.data[0]);
    return heading.map((each) => {
      return <td>{eachData[each]}</td>;
    });
  };

  const genarateButtons = () => {
    let buttons = [];
    for (let i = 1; i <= lastPage; i++) {
      buttons.push(i);
    }
    return buttons.map((each) => (
      <button onClick={() => setPage(each)}>{each}</button>
    ));
  };

  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        &lt;&lt;
      </button>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        &lt;
      </button>

      <div>
        <span>{reLoad % 2 === 0 ? genarateButtons() : genarateButtons()}</span>
        {/* <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
        <button onClick={() => setPage(6)}>6</button> */}
        <button
          disabled={page === lastPage}
          className="page"
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
        <button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
          &gt;&gt;
        </button>
      </div>
      {props.data.length}

      <table>
        <thead>
          <tr>{genarateHead()}</tr>
          {/* <td>{genarateHead()}</td> */}
        </thead>
        <tbody>{displayPage()}</tbody>
      </table>
    </div>
  );
}
export default Table;
