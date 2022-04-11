import axios from "axios";
import { useEffect, useState } from "react";

const UserData = () => {

    const [userId, setUserId] = useState();
    const [appUser, setAppUser] = useState({});
    const [appUserToAdd, setAppUserToAdd] = useState({});
    const [appUsersList, setAppUsersList] = useState([]);

    const dataUrl = `https://jsonplaceholder.typicode.com/users`;

    useEffect(() => {
        console.log(`useEffect`);
        setAppUser({
            id: 101,
            name: "Sonu",
            username: "sonu",
            email: "sonu@gmail.com",
            phone: 9876543210,
        });
    }, []);

    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setUserId(evt.target.value);
    }

    const handleAddAppUser = (evt) => {
        evt.preventDefault();
        setAppUserToAdd(
            {
                ...appUserToAdd,
                [evt.target.name]: evt.target.value
            });
    }

    const submitGetAppUserById = (evt) => {
        evt.preventDefault();
        axios.get(`${dataUrl}/${userId}`)
            .then((response) => {
                console.log(response.data);
                setAppUser(response.data);
            })
            .catch(() => {
                alert("User not found.");
                setUserId();
            });
    }

    const submitAddAppUser = (evt) => {
        evt.preventDefault();
        axios.post(dataUrl, appUserToAdd)
            .then((response) => {
                alert(`User added successfully ${response.data}`);
            })
            .catch(() => {
                alert("User could not be added.");
            });
    }

    const submitGetAllAppUsers = (evt) => {
        evt.preventDefault();
        axios.get(`${dataUrl}`)
            .then((response) => {
                console.log(response.data);
                setAppUsersList(response.data);
            })
            .catch(() => {
                alert("Users not found.");
                setAppUsersList([]);
            });
    }
    return (
        <div className="container" >
            <p className="display-4 text-primary">User Data Component</p>
            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>Add a New App User</p>
                    <form className="form form-group form-primary" onSubmit={submitAddAppUser}>
                        <input className="form-control mt-3" type="number" id="id" name="id" value={appUserToAdd.id} onChange={handleAddAppUser} placeholder="Enter id" />
                        <input className="form-control mt-3" type="text" id="name" name="name" value={appUserToAdd.name} onChange={handleAddAppUser} placeholder="Enter name" />
                        <input className="form-control mt-3" type="text" id="username" name="username" value={appUserToAdd.username} onChange={handleAddAppUser} placeholder="Enter username" />
                        <input className="form-control mt-3" type="email" id="email" name="email" value={appUserToAdd.email} onChange={handleAddAppUser} placeholder="Enter email" />
                        <input className="form-control mt-3" type="number" id="phone" name="phone" value={appUserToAdd.phone} onChange={handleAddAppUser} placeholder="Enter phone" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Add User" />
                    </form>
                </div>
            </div>

            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find App User by id</p>
                    <form className="form form-group form-primary" onSubmit={submitGetAppUserById}>
                        <input className="form-control mt-3" type="number" id="userId" name="userId" value={userId} onChange={handleChange} placeholder="Enter userId to search" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find appUser" />
                    </form>
                    {/* <p className="text-dark"> <span className="font-weight-bold"> App User Data: </span><br />  {appUser.id} <br />{appUser.name} <br />{appUser.username} <br />{appUser.email} <br />{appUser.phone}</p> */}
                    <div><span className="font-weight-bold"> App User Data: </span><br /> {JSON.stringify(appUser)}</div>
                </div>
            </div>
            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find All App Users</p>
                    <form className="form form-group form-primary" onSubmit={submitGetAllAppUsers}>
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find All App Users" />
                    </form>
                    <p className="text-dark"> All users data </p>
                    <div><span className="font-weight-bold"> All App Users Data: </span>
                        {<div>
                            {appUsersList.map(item => {
                                return <div>{JSON.stringify(item)}</div>;
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default UserData;


// documentation - https://www.npmjs.com/package/axios

// import axios from "axios";
// import { useEffect, useState } from "react";

// const UserData = () => {

//     const [appUser, setAppUser] = useState({});
//     const [userId, setUserId] = useState(0);

//     const dataUrl = `https://jsonplaceholder.typicode.com/users`;

//     useEffect(() => {

//         setAppUser({
//             id: 101,
//             name: "Sonu",
//             username: "sonu",
//             email: "sonu@gmail.com",
//             phone: 9876543210,
//         });
//     }, []);

//     const handleChange = (evt) => {
//         evt.preventDefault();
//         console.log(evt.target.value);
//         setUserId(evt.target.value);
//     }

//     const submitGetAppUserById = (evt) => {
//         evt.preventDefault();
//         console.log(evt);
//         axios.get(`${dataUrl}/${userId}`)
//             .then((response) => {
//                 console.log(response.data);
//                 setAppUser(response.data);
//             })
//             .catch(() => {
//                 alert("User not found.");
//                 setUserId(0);
//             });
//     }

//     return (
//         <div className="container">
//             <p>UserData Component</p>
//             <p>{appUser.name} {appUser.email} {appUser.phone}</p>
//             <div>
//                 <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
//                     <p>Find App User by id</p>
//                     <form className="form form-group form-primary" onSubmit={submitGetAppUserById}>
//                         <input className="form-control mt-3" type="number" id="userId" name="userId" value={userId} onChange={handleChange} placeholder="Enter userId to search" autoFocus />
//                         <input className="form-control mt-3 btn btn-primary" type="submit" value="Find appUser" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default UserData;














// import axios from "axios";
// import { useEffect, useState } from "react";


// const UserData = () => {

//     const [appUser, setAppUser] = useState({});

//     useEffect(() => {

//         axios.get('https://jsonplaceholder.typicode.com/users/11')
//             .then((response) => {
//                 console.log(response);
//                 setAppUser(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 // setAppUser();
//             })
//     }, []);

//     return (
//         <div className="container">
//             <p>UserData Component</p>
//             <p>{appUser.name} {appUser.email} {appUser.phone}</p>
//         </div>
//     );

// }

// export default UserData;