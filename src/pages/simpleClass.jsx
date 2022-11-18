import React, { Component } from 'react';
import '../css/counter.css';

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
      <div className="counter">
        <h1 className="seet"><i class="fa-solid fa-globe"></i> SimpleClass</h1>
        <button className="set"onClick={()=>this.increment()}>+</button>
        <button>{this.state.count}</button>
        <button className="set" onClick={()=>this.decrement()}>-</button>
      </div>
    );
  }
}
export default SimpleClass;
