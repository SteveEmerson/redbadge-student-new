import React, { Component } from 'react';

class PropsExample extends Component {
  
  render() {
    let {name, business} = this.props;
    // props is a variable in the parent class so no need to pass props to anything
    return <div>{name} is the founder of the {business}</div>;
  }
}

export default PropsExample;

