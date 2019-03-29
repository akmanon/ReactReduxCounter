import React, { Component } from "react";
import { connect } from "react-redux";

//Constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//Actions
const incrementCount = () => ({
  type: INCREMENT
});
const decrementCount = () => ({
  type: DECREMENT
});

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button className="btn" onClick={this.props.increment}>
          +
        </button>
        <span>0</span>
        <button className="btn" onClick={this.props.decrement}>
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});
const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementCount());
  },
  decrement: () => {
    dispatch(decrementCount());
  }
});

export default connect(
  null,
  null
)(Counter);
