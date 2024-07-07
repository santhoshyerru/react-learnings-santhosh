import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice(
   { name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action)=>{
            const isItemExists = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if(isItemExists) {
                isItemExists.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        clearCart: (state, action)=>{
            state.items.length = 0;
        },
        removeItem: (state, action)=>{
            const isItemExists = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if(isItemExists.quantity>1){
                isItemExists.quantity -= 1;
            }else{
            state.items = state.items.filter((item)=>item.card.info.id!==action.payload.card.info.id);}
        }}
}
)
export const {addToCart, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;