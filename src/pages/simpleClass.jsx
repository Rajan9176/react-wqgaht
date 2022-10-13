import React, { Component } from 'react';
class SimpleClass extends Component {
  state={
    count:1
    
  }
  increment(){
    this.setState({count:this.state.count+1});
    // this.state.count +1
    // alert(this.state.count);
  }
  decrement(){
    this.setState({count:this.state.count-1});
    // alert('decrement');
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.increment()}>+</button>
        <button>{this.state.count}</button>
        <button onClick={()=>this.decrement()}>-</button>
      </div>
    );
  }
}
export default SimpleClass;
