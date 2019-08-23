import { combineReducers } from 'redux';
import products from './product';
import detailProduct from './detail';

export default combineReducers({
  products,
  detailProduct
});
