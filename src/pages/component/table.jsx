import React from 'react';
function Table(props) {
  const genarateHead = () => {
    var heading = Object.keys(props.data[0]);
    return heading.map((each) => {
      return <th>{each}</th>;
    });
  };

  const genarateRow = () => {
    return props.data.map((each) => {
      return <tr> {genarateData(each)}</tr>;
    });
  };
  const genarateData = (eachData) => {
    var heading = Object.keys(props.data[0]);
    return heading.map((each) => {
      return <td>{eachData[each]}</td>;
    });
  };
  return (
    <div>
      {props.data.length}
      <table>
        <thead>
          <tr>{genarateHead()}</tr>
          {/* <td>{genarateHead()}</td> */}
        </thead>
        <tbody>{genarateRow()}</tbody>
      </table>
    </div>
  );
}
export default Table;
