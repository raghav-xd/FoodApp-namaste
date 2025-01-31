import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({
   
    // name of the slice (used for naming the actions and reducers)
   name:'cart',
   initialState:{
    items:[],
   }, 
   reducers:{
         addItem: (state,action)=>{
            state.items.push(action.payload);
         },

         removeItem:(state)=>{
            state.items.pop();
         },
         clearCart:(state)=>{
            state.items.length=0;
         }
   }
})


// this cartslice object will some thig look like this
// {
//     name: 'cart',
//     reducer: function (state, action) {...}, 
//     actions: {
//         addItem,   // Action creator function
//         removeItem,
//         clearCart
//     }
// }

export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;

