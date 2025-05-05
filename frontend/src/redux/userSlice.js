import { createSlice } from '@reduxjs/toolkit';

const initialState={
    name:"",
    email:"",
    _id:""
 }
 export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            console.log(action.payload.data)
            //  state.user=action.payload.data;
            state.name=action.payload.data.name
             state.email=action.payload.data.email
            state._id=action.payload.data._id
        },
       
        
    },
})
export const {loginRedux}=userSlice.actions;
export default userSlice.reducer 