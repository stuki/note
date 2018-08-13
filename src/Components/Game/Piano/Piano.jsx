import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PianoOctave from './PianoOctave';

class Piano extends Component {
  componentDidMount() {
    // console.log(this);
    // React.FindDOMNode(this.refs)
  }

  render() {
    const { octaves, KeyClick } = this.props;

    const elements = [];
    for (let i = 0; i < octaves; i++) {
      elements.push(
        <PianoOctave octave={i + 1} KeyClick={KeyClick} />,
      );
    }

    return (
      <div id="piano">
        <ul>
          {elements}
        </ul>
      </div>
    );
  }
}

Piano.propTypes = {
  octaves: PropTypes.number,
  KeyClick: PropTypes.func.isRequired,
};

Piano.defaultProps = {
  octaves: 1,
};

export default Piano;
