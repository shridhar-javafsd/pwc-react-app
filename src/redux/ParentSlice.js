import { createSlice } from "@reduxjs/toolkit";

const ParentSlice = createSlice(
    {
        name: 'parent',
        initialState: {
            parentState: {
                parentName: 'Monu',
                parentAge: 30
            }
        }, 
        reducers: {
            getParentData: (state, action) => {
                console.log(state);
                // state.parentState = action.payload;
            },
            updateParentData: (state, action) => {
                console.log(state);
                console.log(action)
                state.parentState.parentName = action.payload;
            }
        }
    }
);
export const { getParentData, updateParentData } = ParentSlice.actions;
export default ParentSlice.reducer;
