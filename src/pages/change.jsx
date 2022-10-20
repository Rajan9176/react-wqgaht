import React, { Component } from 'react';
import '../css/change.css';
class Change extends Component {
  state = { age: 25 };
  changeAge() {
    if (this.state.age === 25) {
      this.setState({ age: 45 });
    } else {
      this.setState({ age: 25 });
    }
  }

  render() {
    return (
      <div className="change">
        <button onClick={() => this.changeAge()}>Change</button>
        <tr>
          <th className="name">Name</th>
          <th className="name">Age</th>
        </tr>
        <tr>
          <td className="age">Rajendran</td>
          <td className="age">{this.state.age}</td>
        </tr>
      </div>
    );
  }
}

export default Change;
