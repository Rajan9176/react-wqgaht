import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    alert('constructor');
    super(props);
    this.state = { favoritecolor: 'red' };
  }
  static getDerivedStateFromProps(props, state) {
    alert('static');
    console.log(props);
    console.log(state);
    return { favoritecolor: props.favcol };
  }
  render() {
    alert('render');
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}
export default Header;
