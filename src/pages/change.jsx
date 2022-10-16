import React, { Component } from 'react';
import '../css/change.css';
class Change extends Component {
  state={
    count:25
  }
  increment(){
  //  alert(this.state.count);
   this.setState({count:this.state.count+20});
  }
  render() {
    return (
      <div className="change">
        <button onClick={()=>this.increment()}>Change</button>
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
