import { configureStore } from "@reduxjs/toolkit";
import childReducer from './ChildSlice';
import parentReducer from './ParentSlice';
/*
// steps - 
1. create store - (only one) 
2. provide the store to index.js
3. create "slices" for components (one for each componet)
// slice - communication mechanism between store and components 
4. use slices in the components 

guide - https://redux-toolkit.js.org/tutorials/quick-start 
*/

// const store = configureStore( {object containing reducers} );

console.log('store');
const store = configureStore(
    {
        reducer: {
            child: childReducer,
            parent: parentReducer
            // , anotherComponent: aontherComponehtReducer
        }
    }
);

export default store;

