import React, { Component } from 'react';
import '../css/change.css';
class Change extends Component {
  state=[25];
  ChangeAge() {
    // alert('hii');
    // if (this.age === 25) {
    //   this.setState({ age: (this.age = 45) });
    // } else
    //   () => {
    //     this.setState({ age: (this.age = 25) });
    //   };
  }

  render() {
    return (
      <div className="change">
        <button onClick={() => this.state.age()}>Change</button>
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
