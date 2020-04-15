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
    setTimeout(() => {
      this.props.updateDisplay('Push something');
    }, 1000);
  }
  render() {
    return (
      <div className='display' id='display'>
        <h3>{this.props.display}</h3>
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
