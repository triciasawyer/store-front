import productsReducer from '.';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { set } from '../actions';

describe('Products reducer', () => {
    const reducers = combineReducers({
        products: productsReducer,
    });

    const store = createStore(reducers);


    test('should provide initial state', () => {
        let state = store.getState();
        let { products } = state.products;

        expect(products.length).toEqual(7);
    });

    
    test('should contain relevant products when active category is set', () => {
        let category = { name: 'food', displayName: 'Food' };
        store.dispatch(set(category));
        let state = store.getState();
        let { products } = state.products;

        expect(products.length).toEqual(3);
        expect(products[0].name).toEqual('Apples');

    })

});