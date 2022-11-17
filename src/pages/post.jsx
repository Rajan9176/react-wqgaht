import React from 'react';
import Table from './component/table';
function Post() {
  const [PostList, setPostList] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
  });
  return (
    <div>
      {PostList.length > 0 ? (
        <div>
          <Table data={PostList} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
export default Post;
