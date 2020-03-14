import React, { Component } from "react";

class UpgradeButton extends Component {
  state = {
    purchased: false,
    cost: this.props.cost,
    multiplier: this.props.multiplier
  };

  purchaseUpgrade = (cost, multiplier) => {
    this.setState({ purchased: true });
    this.props.upgradeChanges(cost, multiplier);
  };

  render() {
    return (
      <div>
        {this.props.currency >= this.state.cost && !this.state.purchased ? (
          <button
            className="btn btn-outline-primary"
            onClick={() =>
              this.purchaseUpgrade(this.state.cost, this.state.multiplier)
            }
          >
            x{this.state.multiplier} Your Increment
          </button>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default UpgradeButton;
