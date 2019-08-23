const detailProduct = (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_PRODUCT':
      return action;

    default:
      return state;
  }
};

export default detailProduct;
