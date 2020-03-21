import React, { Component } from "react";

import { connect } from "react-redux";

// Components
import UpgradeButton from "./UpgradeButton";
import PerSecondUpgradeButton from "./PerSecondUpgradeButton";

class UpgradeStore extends Component {
  render() {
    const upgradeList = this.props.upgrades
      .filter(
        upgrade => !upgrade.purchase && this.props.currency >= upgrade.cost
      )
      .map(upgrade => <UpgradeButton upgrade={upgrade} />);

    const perSecondUpgradeList = this.props.perSecondUpgrades
      .filter(
        upgrade => !upgrade.purchase && this.props.currency >= upgrade.cost
      )
      .map(upgrade => <PerSecondUpgradeButton upgrade={upgrade} />);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Per Click Upgrades</h4>
            {upgradeList}
          </div>
          <div className="col">
            <h4>Per Second Upgrades</h4>
            {perSecondUpgradeList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency,
    upgrades: state.upgrades,
    perSecondUpgrades: state.perSecondUpgrades
  };
};

export default connect(mapStateToProps)(UpgradeStore);
