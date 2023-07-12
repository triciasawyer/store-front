import cartReducer, { addToCart, removeFromCart } from './index';

describe('Cart Reducer', () => {
  test('should add a product to the cart', () => {
    const initialState = [];
    const product = { name: 'Shirt', price: 10.99 };

    const newState = cartReducer(initialState, addToCart(product));

    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual(product);
  });

  test('should remove a product from the cart', () => {
    const initialState = [
      { name: 'Shirt', price: 10.99 },
      { name: 'Pants', price: 19.99 },
      { name: 'Shoes', price: 39.99 },
    ];
    const product = { name: 'Pants', price: 19.99 };

    const newState = cartReducer(initialState, removeFromCart(product));

    expect(newState).toHaveLength(2);
    expect(newState).not.toContain(product);
  });

  test('should return the initial state for unknown action types', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION', payload: {} };

    const newState = cartReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
