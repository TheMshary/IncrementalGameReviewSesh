import React from "react";

import { connect } from "react-redux";

import { purchaseUpgrade } from "./redux/actions";

function UpgradeButton(props) {
  const upgrade = props.upgrade;
  return (
    <div>
      <button
        className="btn btn-outline-primary"
        onClick={() => props.purchaseUpgrade(upgrade)}
      >
        x{upgrade.multiplier} Your Increment
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    purchaseUpgrade: upgrade => dispatch(purchaseUpgrade(upgrade))
  };
};

export default connect(null, mapDispatchToProps)(UpgradeButton);
