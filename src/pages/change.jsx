import React, { Component } from 'react';
import '../css/change.css';
class Change extends Component {


 }
  

  render() {
    return (
      <div className="change">
        <button onChange={() => this.state.age}>Change</button>
        <tr>
          <th className="name">Name</th>
          <th className="name">Age</th>
        </tr>
        <tr>
          <td className="age">Rajendran</td>
          <td className="age">25</td>
        </tr>
      </div>
    );
  }
}
export default Change;
