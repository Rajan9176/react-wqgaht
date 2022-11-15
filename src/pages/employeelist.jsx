import React, { Component } from 'react';
class EmployeeList extends Component {
  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  genarateButtons() {
    return this.buttons.map((each) => {
      // return '<button>' + each + '</button>';
      return <button>{each}</button>;
    });
    //   let displayButtons = '';
    //   for (let i = 1; i <= this.buttons.length; i++) {
    //     displayButtons += '<button>' + i + '</button>';
    //   }
    //   return displayButtons;
  }
  render() {
    return (
      <div>
        hiiii
        <div>{this.genarateButtons()}</div>
      </div>
    );
  }
}
export default EmployeeList;
