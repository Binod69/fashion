export const addDecimals = (num) => {
  return Math.round((num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //Calculate shippping price (if order is over rs3000 is free else rs150)
  state.shippingPrice = addDecimals(state.itemsPrice > 3000 ? 0 : 150);
  //Calculate text price(15% tax)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  //Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
