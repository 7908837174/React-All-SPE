import React from 'react';

export const Header = () => <h1>This is Header</h1>;
export const Footer = () => <h1>This is Footer</h1>;
export const Body = () => <h1>This is Body</h1>;



import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);  
    this.state = { value: this.props.initial }; 
    console.log("Constructor Called!");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("State has changed!");
    }
  } 

  render() {
    return <div>Welcome Component</div>;
  }
}

export default Welcome;
