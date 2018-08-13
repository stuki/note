import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class StartPage extends Component {

  render() {
    const {
      handleModeSelect
    } = this.props;

    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => handleModeSelect("beginner")} block>
            Beginner
          </Button>
          <Button bsStyle="primary" onClick={() => handleModeSelect("intermediate")} block>
            Intermediate
          </Button>
          <Button bsStyle="primary" onClick={() => handleModeSelect("hard")} block>
            Hard
          </Button>
        </ButtonToolbar>
      </div>
    );
  }

}

export default StartPage;
