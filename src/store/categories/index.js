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
        setCategory: (state, action) => {
            return {...state, activeCategory: action.payload}
        }
    }
})

 export const { setCategory } = categorySlice.actions;
 export default categorySlice.reducer;
