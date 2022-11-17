import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    alert('constructor');
    super(props);
    this.state = { favoritecolor: 'red' };
    // alert('rajan');
  }
  static getDerivedStateFromProps(props, state) {
    alert('static');
    console.log(props);
    console.log(state);
    return { favoritecolor: props.favcol };
  }

  componentDidMount() {
    alert('componentDidMount');
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    });
  }
  componentWillmount() {
    alert('componentwillmount');
  }
  componentWillUpdate() {
    alert('componentwillubdate');
  }
  componentDidUpdate() {
    alert('componentdidupdate');
  }
  componentWillUnmount() {
    alert('componentwillunmount');
  }

  render() {
    alert('render');
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}
export default Header;
