import React, { Component } from 'react';
import Display from '../components/Display';
import DrumPads from '../components/DrumPads';

class Case extends Component {
  render() {
    return (
      <div id='drum-machine' className='case'>
        <h1>Operator</h1>
        <Display />
        <DrumPads />
      </div>
    );
  }
}

export default Case;
