import {
  INCREMENT_CURRENCY,
  PURCHASE_UPGRADE,
  PER_SECOND_INCREMENT,
  PURCHASE_PER_SECOND_UPGRADE
} from "./actionTypes";

// Upgrades data
import { upgrades, perSecondUpgrades } from "../upgradesData";

const initialState = {
  currency: 0,
  incrementValue: 1,
  upgrades: upgrades,
  perSecondUpgrades: perSecondUpgrades,
  perSecondIncrement: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CURRENCY:
      return {
        ...state,
        currency: state.currency + state.incrementValue
      };
    case PURCHASE_UPGRADE:
      const upgrade = action.payload;
      return {
        ...state,
        currency: state.currency - upgrade.cost,
        incrementValue: state.incrementValue * upgrade.multiplier,
        upgrades: state.upgrades.map(stateUpgrade => {
          if (stateUpgrade === upgrade) stateUpgrade.purchase = true;
          return stateUpgrade;
        })
      };
    case PER_SECOND_INCREMENT:
      return {
        ...state,
        currency: state.currency + state.perSecondIncrement
      };
    case PURCHASE_PER_SECOND_UPGRADE:
      const perSecondUpgrade = action.payload;
      return {
        ...state,
        currency: state.currency - perSecondUpgrade.cost,
        perSecondIncrement:
          state.perSecondIncrement + perSecondUpgrade.increase,
        perSecondUpgrades: state.perSecondUpgrades.map(stateUpgrade => {
          if (stateUpgrade === perSecondUpgrade) stateUpgrade.purchase = true;
          return stateUpgrade;
        })
      };
    default:
      return state;
  }
};

export default reducer;
