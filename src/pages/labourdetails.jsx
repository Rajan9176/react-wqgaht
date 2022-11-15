import { useSelector } from 'react-redux';
import React from 'react';
function LabourDetails() {
  
  const labour = useSelector((state) => state.labour.value);
  return <p>Name: {labour.Name}</p>;
}
export default LabourDetails;
