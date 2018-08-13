import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class ButtonList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { KeyClick } = this.props;
    KeyClick({
      key: e.currentTarget.innerHTML.toLowerCase(),
    });
  }

  render() {
    return (
      <ButtonGroup bsSize="large" justified>
        <Button bsStyle="primary" onClick={this.handleClick}>
          C
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          D
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          E
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          F
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          G
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          A
        </Button>
        <Button bsStyle="primary" onClick={this.handleClick}>
          B
        </Button>
      </ButtonGroup>
    );
  }
}

export default ButtonList;
