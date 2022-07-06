import {ActionTypes} from '../constants/action-types';

const initialState = {
  products: [
    {
      id: 1,
      title: "dress",
      category: "women-cloth",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;
    default:
      return state;
  }
};
