import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

import { incrementCurrency } from "./redux/actions";

// Components
import UpgradeStore from "./UpgradeStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          className="btn btn-success"
          onClick={this.props.incrementCurrency}
        >
          Add {this.props.incrementValue}
        </button>
        <p>{this.props.currency}</p>
        <p>{this.props.perSecondIncrement} currency/second</p>
        <UpgradeStore currency={this.props.currency} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency,
    incrementValue: state.incrementValue,
    perSecondIncrement: state.perSecondIncrement
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCurrency: () => dispatch(incrementCurrency())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
