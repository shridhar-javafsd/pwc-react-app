import { useState } from "react";
import { useSelector } from "react-redux";

const Child = (props) => {

    const childDataFromStore = useSelector((state) => {
        console.log(state);
        return state.child.childState;
    });

    const parentDataFromStore = useSelector((state) => {
        console.log(state);
        return state.parent.parentState;
    });

    return (
        <div className="container" >
            <p className="display-4 text-primary">Child Component</p>
            <p>Child data from store to component: {childDataFromStore.childName} {childDataFromStore.childAge}</p>
            <p>Parent data from store to component: {parentDataFromStore.parentName} {parentDataFromStore.parentAge}</p>
            <p></p>
        </div>
    );
}
export default Child;
