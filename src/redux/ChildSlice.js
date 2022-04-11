import { createSlice } from "@reduxjs/toolkit";

const ChildSlice = createSlice(
    {
        name: 'child',
        initialState: {
            childState: {
                childName: 'Sonu',
                childAge: 5
            }
        },
        reducers: {
            getChildData: (state, action) => {
                console.log('getChildData');
                state.childState = action.payload;
            },
            addChildData: () => { }
        }
    }
);
export const { getChildData, addChildData } = ChildSlice.actions;
export default ChildSlice.reducer;