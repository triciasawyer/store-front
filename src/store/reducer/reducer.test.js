// import '@testing-library/jest-dom';
// import reducer, { set } from '../reducer/index';

// let initialState;

    // beforeEach(() => {
    //   initialState = {
    //     categories: [
    //       { name: 'electronics', displayName: 'Electronics' },
    //       { name: 'food', displayName: 'Food' },
    //       { name: 'clothing', displayName: 'Clothing' },
    //     ],
    //     products: [
    //       { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    //       { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    //       { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    //       { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    //       { name: 'Apples', category: 'food', price: 0.99, inStock: 500 },
    //       { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    //       { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    //     ],
    //     activeCategory: '',
    //   };
    // });
  
//     describe('Functionality of reducer', () => {
//     test('should set the active category and filter products accordingly', () => {
        
//         const category = { name: 'food', displayName: 'Food' };
//         const action = set(category);
//         const newState = reducer(initialState, action);
    
//         expect(newState.activeCategory).toBe(category);
//         expect(newState.products).toEqual(initialState.products.filter(product => product.category === category.name));
//       });

// });