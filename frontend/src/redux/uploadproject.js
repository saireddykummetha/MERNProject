import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  projectlist: [],
  cartItem:[]
};

const uploadproject = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    uploadProject:(state,action)=>{
      console.log(action);
      state.projectlist=[...action.payload]
   },
   addCartItem:(state,action)=>{
    const check=state.cartItem.some((el)=>el._id===action.payload._id)
    console.log(check)
       const total=action.payload.price
       state.cartItem=[...state.cartItem,{...action.payload,qty:1,total:total},]
     }  
  },
  }
);

export const { uploadProject,addCartItem } = uploadproject.actions;
export default uploadproject.reducer;
