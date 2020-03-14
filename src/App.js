import React, { Component } from "react";
import "./App.css";

// Components
import UpgradeStore from "./UpgradeStore";

class App extends Component {
  state = {
    currency: 0,
    incrementValue: 1
  };

  addCurrency = () => {
    const newCurrency = this.state.currency + this.state.incrementValue;
    this.setState({ currency: newCurrency });
  };

  upgradeChanges = (cost, incrementValueMultiply) => {
    const oldIncrementValue = this.state.incrementValue;
    const currency = this.state.currency;
    this.setState({
      incrementValue: oldIncrementValue * incrementValueMultiply,
      currency: currency - cost
    });
  };

  render() {
    return (
      <div className="App">
        <button className="btn btn-success" onClick={this.addCurrency}>
          Add {this.state.incrementValue}
        </button>
        <p>{this.state.currency}</p>
        <UpgradeStore
          currency={this.state.currency}
          upgradeChanges={this.upgradeChanges}
        />
      </div>
    );
  }
}

export default App;
