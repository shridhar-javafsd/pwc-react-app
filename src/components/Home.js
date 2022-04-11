const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://akm-img-a-in.tosshub.com/businesstoday/images/story/202108/pwc-sixteen_nine.jpg")`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'cover',
            }}>
            <div className="container"
                style={{ height: "100vh" }}
            >
                <h1 className="display-4 text-primary">Welcome to PwC</h1>
                <p>PwC trainees, especially those who are from April 2022 batch, are really very genious!</p>
            </div>

        </div>

    );
}

export default Home;

// // using state in function component
// // hook == method == function

// import { useEffect, useState } from "react";

// const Home = (props) => {

//     const [myHome, setMyHome] = useState({ homeName: 'Dream home', homePrice: 100 });

//     const [arr, setArr] = useState([]); // array variable
//     const [obj, setObj] = useState({}); // object variable
//     const [salary, setSalary] = useState(0); // number variable
//     const [address, setAddress] = useState(''); // string variable
//     const [isMarried, setIsMarried] = useState(false); // boolean variable
//     const [propsData, setPropsData] = useState(''); // boolean variable

//     useEffect(() => {
//         setArr([10, 20, 30]);
//         setObj({ eid: 101, eName: 'Sonu', salary: 50000 });
//         setSalary(75000);
//         setAddress("Hyderabad");
//         setIsMarried(true);
//         setPropsData(props.dataFromParent);
//     });

//     // useEffect(() => {
//     //     setArr([10, 20, 30]);
//     //     setObj({ eid: 101, eName: 'Sonu', salary: 50000 });
//     //     setSalary(75000);
//     //     setAddress("Hyderabad");
//     //     setIsMarried(true);
//     // }, []);

//     const increasePrice = (evt) => {
//         console.log(myHome.homePrice);

//         setMyHome({
//             ...myHome,
//             [evt.target.name]: myHome.homePrice + 10
//         });
//     }

//     const changeHomeName = (evt) => {
//         console.log(myHome.homeName);
//         setMyHome({
//             ...myHome,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary">Home Component (Child)</p>
//             <p>Welcome to home component.</p>
//             <p>Data from parent in child component: {propsData}</p>

//             <p>My home name: {myHome.homeName} </p>
//             <p>My home price: {myHome.homePrice}</p>
//             <p> {arr[0]}</p>
//             <p>{obj.eName} </p>
//             <p>{salary}</p>
//             <p> {address} </p>
//             <p> {isMarried}</p>
//             <button type="button" name="homePrice" onClick={increasePrice} >Increase home price</button>
//             <br />
//             <br />
//             <form>
//                 <input type="text" name="homeName" onChange={(evt) => { changeHomeName(evt) }} ></input>
//             </form>


//         </div>
//     );
// }
// export default Home;


// // using state in class component

// import { Component } from "react";
// class Home extends Component {

//     constructor() {
//         super();
//         this.state = { myHomeName: 'Dream home', homePrice: 100 };
//     }

//     increasePrice = () => {
//         this.setState({ homePrice: this.state.homePrice + 10 });
//         console.log(this.state.homePrice);
//     }

//     changeHomeName = (evt) => {
//         this.setState({ myHomeName: evt.target.value });
//         console.log(this.state.myHomeName);
//     }

//     render = () => {

//         return (
//             <div className="container" >
//                 <p className="display-4 text-primary">Home Component</p>
//                 <p>Welcome to home component.</p>
//                 <p>My home name: {this.state.myHomeName} </p>
//                 <p>My home price: {this.state.homePrice}</p>
//                 <button type="button" onClick={this.increasePrice} >Increase home price</button>
//                 <br />
//                 <br />
//                 <form>
//                     <input type="text" onChange={(evt) => { this.changeHomeName(evt) }} ></input>
//                 </form>


//             </div>
//         );
//     }
// }
// export default Home;


// const Home = () => {

//     const myHomeName = 'Dream home'; // dynamic value =  take input from user, from the backend
//     let price = 100;

//     let increasePrice = () => {
//         price += 10;
//         console.log(price);
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary">Home Component</p>
//             <p>Welcome to home component.</p>
//             <p> {myHomeName} </p>
//             <p> {price}</p>
//             <button type="button" onClick={increasePrice} >Increase home price</button>
//         </div>
//     );
// }
// export default Home;

// component types
// 1. function components
// 2. class components

// components are reusable.

// datatypes  in JS
// primitive types - number, string, boolean
// reference types - array, object

// state - one object for a component

// stages of component lifeycle -
// mount - load
// update
// unmount - remove

// // 1. function components
// import { useState } from "react";
// const Home = () => {

//     const [myHome, setMyHome] = useState('Dream home');

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary">Home Component</p>
//             <p>Welcome to home component.</p>
//             <p>My home name is: {myHome}</p>
//         </div>
//     );
// }
// export default Home;

// // 2. class components
// import { Component } from "react";

// class Home extends Component {

//     render = () => {
//         return (
//             <div className="container" >
//                 <p className="display-4 text-primary">Home Component</p>
//                 <p>Welcome to ??? component.</p>
//             </div>
//         );
//     }
// }
// export default Home;
