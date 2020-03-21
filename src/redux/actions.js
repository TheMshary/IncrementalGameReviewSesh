import {
  INCREMENT_CURRENCY,
  PURCHASE_UPGRADE,
  PER_SECOND_INCREMENT,
  PURCHASE_PER_SECOND_UPGRADE
} from "./actionTypes";

export const incrementCurrency = () => {
  return {
    type: INCREMENT_CURRENCY
  };
};

export const purchaseUpgrade = upgrade => {
  return {
    type: PURCHASE_UPGRADE,
    payload: upgrade
  };
};

export const perSecondIncrement = () => {
  return {
    type: PER_SECOND_INCREMENT
  };
};

export const purchasePerSecondUpgrade = upgrade => {
  return {
    type: PURCHASE_PER_SECOND_UPGRADE,
    payload: upgrade
  };
};
