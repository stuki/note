/*
  eslint
  react/no-array-index-key: 0,
  jsx-a11y/no-noninteractive-element-interactions: 0,
  jsx-a11y/click-events-have-key-events: 0,
  jsx-a11y/interactive-supports-focus: 0,
*/

import React, { Component } from 'react';
import { number, func, shape, arrayOf, string, bool } from 'prop-types';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { KeyClick } = this.props;
    e.stopPropagation();
    KeyClick(e.currentTarget.dataset);
  }

  render() {
    const { data, octave } = this.props;

    const elements = data.map( k => (
      <li
        data-octave={octave}
        data-key={k.note}
        onClick={event => this.handleClick(event)}
      >
        {k.hasBlackKey
          && (
          <div
            data-key={`${k.note}#`}
            data-octave={octave}
            onClick={this.handleClick}
            role="button"
          />
          )
        }
      </li>
    ));
    return (
      <React.Fragment>
        {elements}
      </React.Fragment>
    );
  }
}

Key.propTypes = {
  data: arrayOf(
    shape({
      note: string.isRequired,
      hasBlackKey: bool.isRequired,
    })
  ),
  octave: number.isRequired,
  KeyClick: func.isRequired,
};

export default Key;
