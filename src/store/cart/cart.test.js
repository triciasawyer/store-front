import cartReducer from './index';

describe('Cart Reducer', () => {
  test('should add a product to the cart', () => {
    const initialState = { cart: [] };
    const product = { name: 'Shirt', price: 10.99 };
    const action = { type: 'ADD', payload: product };

    const newState = cartReducer(initialState, action);

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0]).toEqual(product);
  });


  test('should remove a product from the cart', () => {
    const initialState = {
      cart: [
        { name: 'Shirt', price: 10.99 },
        { name: 'Pants', price: 19.99 },
        { name: 'Shoes', price: 39.99 },
      ],
    };
    const product = { name: 'Pants', price: 19.99 };
    const action = { type: 'REMOVE', payload: product };

    const newState = cartReducer(initialState, action);

    expect(newState.cart).toHaveLength(2);
    expect(newState.cart).not.toContain(product);
  });


  test('should return the initial state for unknown action types', () => {
    const initialState = { cart: [] };
    const action = { type: 'UNKNOWN_ACTION', payload: {} };

    const newState = cartReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
  
});
