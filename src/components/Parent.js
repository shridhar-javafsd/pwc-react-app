import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParentData, updateParentData } from '../redux/ParentSlice';


const Parent = () => {

    const dispatch = useDispatch();

    const [personName, setPersonName] = useState();

    const childDataFromStore = useSelector((state) => {
        console.log(state.child.childState);
        return state.child.childState;
    });

    const parentDataFromStore = useSelector((state) => {
        console.log(state.parent.parentState);
        return state.parent.parentState;
    });

    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setPersonName(evt.target.value);
    }

    const submitData = (evt) => {
        evt.preventDefault();
        console.log(evt);
        dispatch(updateParentData(evt.target.value));
    }
    return (
        <div className="container" >
            <p className="display-4 text-primary">Parent Component</p>
            <p>Child data from store to component: {childDataFromStore.childName} {childDataFromStore.childAge}</p>
            <p>Parent data from store to component: {parentDataFromStore.parentName} {parentDataFromStore.parentAge}</p>
            <p></p>
            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Update Parent Data</p>
                    <form className="form form-group form-primary" onSubmit={submitData}>
                        <input className="form-control mt-3" type="text" id="personName" name="personName" value={personName} onChange={handleChange} placeholder="Enter data" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Data" />
                    </form>
                    <div><span className="font-weight-bold"> Updated data: </span><br /> {parentDataFromStore.parentName}</div>
                </div>
            </div>

        </div>
    );
}
export default Parent;

