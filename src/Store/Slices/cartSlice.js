import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItemsId: [],
    },

    reducers: {
        addItem(state, action) {
            return {
                ...state,
                cartItemsId: [...state.cartItemsId, action.payload],
            };
        },

        removeItem(state, action) {
            
            return {
                ...state,
                cartItemsId: state.cartItemsId.filter(item => item.id !== action.payload.item.id),
            };
        },
    }

})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;