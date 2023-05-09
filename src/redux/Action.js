import {ADD_TO_CART} from './Constants';

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    data: item,
  };
};
