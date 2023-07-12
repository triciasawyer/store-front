import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        activeCategory: ''
    },
    reducers: {
        setCategory: (state, action) => {
            return {...state, activeCategory: action.payload}
        },
        setInitialCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
});

// this is called function currying (with multiple arrow functions, returning another function and then finds the action)
export const getCategories = () => async (dispatch, getState) => {
    // make call to get categories from db
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setInitialCategories(response.data.results));
};


 export const { setCategory, setInitialCategories } = categorySlice.actions;
 export default categorySlice.reducer;



//  { name: 'electronics', displayName: 'Electronics' },
//             { name: 'food', displayName: 'Food' },
//             { name: 'clothing', displayName: 'Clothing' },
//         ],