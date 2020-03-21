import React from "react";

import { connect } from "react-redux";

import { purchasePerSecondUpgrade } from "./redux/actions";

function UpgradeButton(props) {
  const upgrade = props.upgrade;
  return (
    <div>
      <button
        className="btn btn-outline-info"
        onClick={() => props.purchasePerSecondUpgrade(upgrade)}
      >
        +{upgrade.increase} currency/second
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    purchasePerSecondUpgrade: upgrade =>
      dispatch(purchasePerSecondUpgrade(upgrade))
  };
};

export default connect(null, mapDispatchToProps)(UpgradeButton);
