import React, { Component } from 'react';
import { Flow } from 'vexflow';

import Notes from '../Notes';
import Piano from '../Piano';

import noteRandomizer from '../../../utils/NoteRandomizer';

class ModeIntermediate extends Component {
  constructor(props) {
    super(props);
    this.range = [4];
    const currentNoteString = noteRandomizer(this.range);
    const nextNoteString = noteRandomizer(this.range);

    const currentNote = new Flow.StaveNote({
      clef: 'treble',
      keys: [currentNoteString],
      duration: 'q',
      align_center: true,
    });

    const nextNote = new Flow.StaveNote({
      clef: 'treble',
      keys: [nextNoteString],
      duration: 'q',
      align_center: true,
    });

    this.state = {
      note: currentNote,
      nextNote,
      answer: null,
      correct: 0,
      total: 0,
    };

    this.KeyClick = this.KeyClick.bind(this);
  }

  KeyClick(p) {
    const {
      note,
      nextNote,
    } = this.state;

    const {
      handleInput
    } = this.props;


    const nextNoteString = noteRandomizer(this.range);

    const newNext = new Flow.StaveNote({
      clef: 'treble',
      keys: [nextNoteString],
      duration: 'q',
      align_center: true,
    });

    const isCorrect = p.key === note.keys[0].split('/')[0]

    // console.log(isCorrect, p,this.state.note.keys[0].split('/'), (parseInt(p.octave) + 3));

    handleInput(isCorrect);

    // console.log(isCorrect, p,this.state.note.keys[0].split('/'), (parseInt(p.octave) + 3));
    this.setState({
      note: nextNote,
      nextNote: newNext,
      answer: isCorrect,
    });
  }

  render() {
    const {
      answer,
      note,
    } = this.state;
    const answerDisplay = answer ? 'right' : 'wrong';
    return (
      <React.Fragment>
        <Notes note={[note]} />
        <Piano octaves={1} KeyClick={this.KeyClick} />
        {answer != null
          && (
            <div>
              <p>
                {answerDisplay}
              </p>
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

export default ModeIntermediate;
