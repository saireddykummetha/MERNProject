import { createSlice } from '@reduxjs/toolkit';

const getFormattedDateTime = () => {
  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = `${now.getDate()}-${months[now.getMonth()]}-${now.getFullYear()}`;
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  const time = `${hours}:${minutes} ${ampm}`;
  return `${date} ${time}`;
};

const initialState = {
  projectlist: []
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateProjectDescription: (state, action) => {
      const { id, description } = action.payload;
      const project = state.projectlist.find((project) => project._id === id);
      if (project) {
        project.description = description;
        project.lastEdited = getFormattedDateTime();
      }
    },

    deleteUser:(state,action)=>{
      const userIdToDelete = action.payload;
      if (state.data && state.data._id === userIdToDelete) {
        state.data = null; 
      }
    }
  },
});

export const { updateProjectDescription,deleteUser } = projectSlice.actions;
export default projectSlice.reducer;
