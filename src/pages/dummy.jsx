import React, { useState } from 'react';
var data = [];
function Dummy() {
  const [dataRecieved, setdataRecieved] = useState(false);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((Data) => {
        data = Data;
        setdataRecieved(true);
      });
  }, []);
  const displayImage = () => {
    let displayData = data.map((each) => {
      return <img src={each.thumbnailUrl} />;
    });
    return displayData;
  };

  return <div>{dataRecieved && displayImage()}</div>;
}
export default Dummy;
