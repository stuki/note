import React, { Component } from 'react';
import { Flow } from 'vexflow';

const { Renderer, Stave, Formatter } = Flow;

class Notes extends Component {
  componentDidMount() {
    const scale = 1.5;
    const { note } = this.props;

    const div = document.createElement('div');
    const renderer = new Renderer(div, Renderer.Backends.SVG);
    renderer.resize(220 * scale, 200 * scale);
    const context = renderer.getContext();
    context.scale(scale, scale);
    const stave = new Stave(10, 40, 200);
    stave.setClef('treble');
    stave.setContext(context).draw();

    Formatter.FormatAndDraw(context, stave, note);

    document.getElementById('sheet').appendChild(div);
  }

  componentDidUpdate() {
    const scale = 1.5;
    const { note }  = this.props;

    const div = document.createElement('div');
    const renderer = new Renderer(div, Renderer.Backends.SVG);
    renderer.resize(220 * scale, 200 * scale);
    const context = renderer.getContext();
    context.scale(scale, scale);
    const stave = new Stave(10, 40, 200);
    stave.setClef('treble');
    stave.setContext(context).draw();

    Formatter.FormatAndDraw(context, stave, note);

    document.getElementById('sheet').innerHTML = '';
    document.getElementById('sheet').appendChild(div);
  }

  render() {
    return (
      <div id="sheet" />
    );
  }
}

export default Notes;
