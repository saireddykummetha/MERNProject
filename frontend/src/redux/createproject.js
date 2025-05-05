import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataList: [],
 
};

const createproject = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    setProject:(state,action)=>{
      // console.log(action);
      state.dataList=[...action.payload]
   },
   
  
  }
});

export const { setProject } = createproject.actions;
export default createproject.reducer;
