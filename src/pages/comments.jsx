import React from 'react';
import Table from './component/table';
function Comments() {
  const [commentList, setCommentList] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCommentList(data);
      });
  });
  return (
    <div>
      {' '}
      {commentList.length > 0 ? (
        <div>
          <Table data={commentList} />{' '}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
export default Comments;
