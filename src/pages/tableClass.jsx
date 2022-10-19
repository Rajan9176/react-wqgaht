import React, { Component } from 'react';

import '../css/tableClass.css';
class TableClass extends Component {
  render() {
    return (
      <div className="repeat">
       
         <tr>
          <th className="row">UserId</th>
          <th className="row">Id</th>
          <th  className="row">Title</th>
          <th className="row">Body</th>
        </tr>
        
        <tr>
          <td className="col">rajan9176</td>
          <td className="col">123</td>
          <td className="col">table</td>
          <td className="col">syntax</td>
        </tr>
      </div>
    );
  }
}
export default TableClass;
