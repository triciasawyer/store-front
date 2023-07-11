const initialState = { cart: [] };

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                cart: [...state.cart, {
                    name: action.payload.name,
                    price: action.payload.price,
                }
                ]
            }
        case 'REMOVE':
            const itemIndex = state.cart.findIndex(product => product.name === action.payload.name);
            if (itemIndex !== -1) {
                const newCart = [...state.cart];
                newCart.splice(itemIndex, 1);
                return {
                    ...state,
                    cart: newCart
                };
            }
            return state;
        default:
            return state;

    }
}


export default cartReducer;