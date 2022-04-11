import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Child from "./components/Child";
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Page404 from './components/Page404';
import Parent from "./components/Parent";
import Register from "./components/Register";
import UserData from './components/UserData';

const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" > <Home /> </Route>
                            <Route exact path="/home" > <Home /> </Route>
                            <Route path="/parent" > <Parent /> </Route>
                            <Route path="/child" > <Child /> </Route>
                            <Route path="/login" > <Login /> </Route>
                            <Route path="/register" > <Register /> </Route>
                            <Route path="/userdata"> <UserData /> </Route>
                            <Route path="/*"> <Page404 /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );

}
export default Routes;