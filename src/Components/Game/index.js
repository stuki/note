import React, { Component } from 'react';
import StartPage from './Modes/StartPage';
import GameOverPage from './Modes/GameOverPage';
import ModeBeginner from './Modes/ModeBeginner';
import ModeIntermediate from './Modes/ModeIntermediate';
import ModeHard from './Modes/ModeHard';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "startgame",
      remainingTime: 60000,
      correct: 0,
      total: 0,
    }
  }

  handleModeSelect = (mode) => {
    this.setState({
      mode
    }, this.startTimer());
  }

  startTimer = () => {
    this.remainingTimer = setInterval(() => {
      let remainingTime = this.state.remainingTime - 1000;
      if (remainingTime > 0) {
        this.setState({
          remainingTime
        })
      } else {
        this.endGame();
      }
    }, 1000)
  }

  newGame = () => {
    this.setState({
      mode: "startgame",
      remainingTime: 60000,
      correct: 0,
      total: 0,
    })
  }

  endGame = () => {
    clearInterval(this.remainingTimer);
    this.setState({
      remainingTime: 60000,
      mode: "gameover",
    })
  }

  handleInput = (correct) => {
    let corr = this.state.correct
    if (correct) {
      corr++
    }
    this.setState({
      correct: corr,
      total: this.state.total + 1
    })
  }

  render() {
    const {
      mode,
      remainingTime,
      correct,
      total,
    } = this.state;

    return (
      <div>
        {mode !== "startgame" && mode !== "gameover" && <div>{remainingTime}</div> }
        {mode === "startgame" &&
          <StartPage handleModeSelect = {this.handleModeSelect} />
        }
        {mode === "beginner" &&
          <ModeBeginner handleInput = {this.handleInput} />
        }
        {mode === "intermediate" &&
          <ModeIntermediate handleInput = {this.handleInput} />
        }
        {mode === "hard" &&
          <ModeHard handleInput = {this.handleInput} />
        }
        {mode === "gameover" &&
          <GameOverPage correct = {correct} total = {total} newGame = {this.newGame} />
        }

      </div>

    );
  }

}

export default Game;
