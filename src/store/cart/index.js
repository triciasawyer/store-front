import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => [...state.cart, {
            name: action.payload.name,
            price: action.payload.price,
        }],
        // remove: (state, action) => state.filter(product => product.name !== action.payload.name)
        removeFromCart: (state, action) => {
            const indexToRemove = action.payload.index;
            if (indexToRemove >= 0 && indexToRemove < state.length) {
                state.splice(indexToRemove, 1);
            }
        },
    },
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;





// const initialState = { cart: [] };

// function cartReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD':
//             return {
//                 ...state,
//                 cart: [...state.cart, {
//                     name: action.payload.name,
//                     price: action.payload.price,
//                 }
//                 ]
//             }
//         case 'REMOVE':
//             const itemIndex = state.cart.findIndex(product => product.name === action.payload.name);
//             if (itemIndex !== -1) {
//                 const newCart = [...state.cart];
//                 newCart.splice(itemIndex, 1);
//                 return {
//                     ...state,
//                     cart: newCart
//                 };
//             }
//             return state;
//         default:
//             return state;

//     }
// }


// export default cartReducer;