import React, { Component } from "react";

// Components
import UpgradeButton from "./UpgradeButton";

// Upgrades data
import upgrades from "./upgradesData";

class UpgradeStore extends Component {
  render() {
    const upgradeList = upgrades.map(upgrade => (
      <UpgradeButton
        upgradeChanges={this.props.upgradeChanges}
        cost={upgrade.cost}
        multiplier={upgrade.multiplier}
        currency={this.props.currency}
      />
    ));
    return <div>{upgradeList}</div>;
  }
}

export default UpgradeStore;
