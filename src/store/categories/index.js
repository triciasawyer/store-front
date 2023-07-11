import { createSlice } from '@reduxjs/toolkit';


const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            { name: 'electronics', displayName: 'Electronics' },
            { name: 'food', displayName: 'Food' },
            { name: 'clothing', displayName: 'Clothing' },
        ],
        activeCategory: ''
    },
    reducers: {
        set: (state, action) => {
            return {...state, activeCategory: action.payload}
        }
    }
})

 export const { set } = categorySlice.actions;
 export default categorySlice.reducer;





// function categoryReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'SET':
//             return {
//                 ...state,
//                 activeCategory: action.payload,
//             }
//         default:
//             return state;
//     }
// }


// export default categoryReducer;