import categoryReducer from './index';

describe('Category Reducer', () => {
  test('should set the active category', () => {
    const initialState = {
      categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
      ],
      activeCategory: '',
    };
    const category = { name: 'electronics', displayName: 'Electronics' };
    const action = { type: 'SET', payload: category };

    const newState = categoryReducer(initialState, action);

    expect(newState.activeCategory).toEqual(category);
  });


  test('should return the initial state for unknown action types', () => {
    const initialState = {
      categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
      ],
      activeCategory: '',
    };
    const action = { type: 'UNKNOWN_ACTION', payload: {} };

    const newState = categoryReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

});
