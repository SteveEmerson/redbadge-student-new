// Create a class version of the Functional Component
import { Button, Container } from 'reactstrap';
import React, { Component } from 'react';

class ClassClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:this.props.initialValue
    }
  }

  handleClick = () => {
    if(this.state.count > 0){
      this.setState({count : this.state.count-1})
    }
  }

  render() {

    return (
      <Container>
        <p>The total clicks left are {this.state.count}</p>
        <Button onClick={this.handleClick}>Click Me From Class</Button>
      </Container>
    );
  }
}

export default ClassClickCounter;
