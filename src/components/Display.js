import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from '../actions/updateAction';
class Display extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.updateDisplay('!!! Ready !!!');
    }, 1000);
  }
  componentDidUpdate() {
    if (this.props.display === 'Push something') {
      let displayText = document.querySelector('.display-text');
      displayText.classList.add('text-animate');
    } else {
      let displayText = document.querySelector('.display-text');
      displayText.classList.remove('text-animate');
    }
    setTimeout(() => {
      this.props.updateDisplay('Push something');
    }, 10000);
  }
  render() {
    return (
      <div className='display' id='display'>
        <h3 className='display-text'>{this.props.display}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    display: state.display,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (msg) => {
      dispatch(updateDisplay(msg));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Display);
