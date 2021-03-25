import React, { Component } from 'react';

class StateExample extends Component {

  constructor(props){
    super(props);  //this is only really needed if the props are used in the constructor
    this.state = {currentTemp: "78", location: "Indiana"};
   // this.handleClick = this.handleClick.bind(this);

  }

  // handleClick() {
  //   //this.state.currentTemp = "80"  // NEVER DO THIS!!!
  //   this.setState({currentTemp: "48"})
  // }

  handleClick = () => {
    this.setState({currentTemp: "48"});   // only need to refer to the state value that is being updated
  }

  render() {
    return(
      <div>
        <p>Hello, the current temp is {this.state.currentTemp} in {this.state.location}</p>
        <button onClick={this.handleClick}> Click Me to Change the Temp </button>
      </div>
    )
  }
}

export default StateExample;