import React, { Component } from 'react';

class DrumPad extends Component {
  handleClick = (e) => {
    console.log('clicked: ', e.target.id);
    let elm = document.getElementById(e.target.id).firstElementChild;
    console.log('elm:', elm);
    elm.play();
  };
  render() {
    return (
      <div className='drum-pad' id={this.props.val} onClick={this.handleClick}>
        {this.props.val}
        <audio
          id={this.props.val}
          className='clip'
          src='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
