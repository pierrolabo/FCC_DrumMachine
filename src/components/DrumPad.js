import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from '../actions/updateAction';

class DrumPad extends Component {
  handleClick = (e) => {
    this.refs.audioElement.play();
    this.props.updateDisplay(this.props.val);
  };
  handleKey = (e) => {
    if (String.fromCharCode(e.keyCode) === this.props.val) {
      this.refs.audioElement.play();
    }
  };
  componentWillMount() {
    document.addEventListener('keydown', this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }
  render() {
    return (
      <div className='drum-pad' id={this.props.val} onClick={this.handleClick}>
        {this.props.val}
        <audio
          id={this.props.val}
          className='clip'
          src={this.props.audio.src}
          ref='audioElement'
        ></audio>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (msg) => {
      dispatch(updateDisplay(msg));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
