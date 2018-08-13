import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class GameOverPage extends Component {
  constructor(props) {
    super(props);

    const {
      correct,
      total,
    } = this.props;

    this.state = {
      correct,
      total,
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.props.newGame();
  }

  render() {
    const {
      correct,
      total,
    } = this.state;

    return (
      <div>
        you got {correct} / {total} right or {Math.floor(correct/total * 100)}%
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleInput}>New Game</Button>
        </ButtonToolbar>

      </div>

    );
  }

}

export default GameOverPage;
