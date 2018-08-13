import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const keys = [
  {
    note: 'c',
    hasBlackKey: true,
  },
  {
    note: 'd',
    hasBlackKey: true,
  },
  {
    note: 'e',
    hasBlackKey: false,
  },
  {
    note: 'f',
    hasBlackKey: true,
  },
  {
    note: 'g',
    hasBlackKey: true,
  },
  {
    note: 'a',
    hasBlackKey: true,
  },
  {
    note: 'b',
    hasBlackKey: false,
  },
];


class PianoOctave extends PureComponent {
  render() {
    const { octave, KeyClick } = this.props;
    return (
      <Key data={keys} octave={octave} KeyClick={KeyClick} />
    );
  }
}

PianoOctave.propTypes = {
  octave: PropTypes.number.isRequired,
  KeyClick: PropTypes.func.isRequired,
};

export default PianoOctave;
