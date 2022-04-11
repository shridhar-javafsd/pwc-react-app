import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header sticky-top bg-white">
            <nav className="navbar navbar-fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand align-left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png" height="56px" alt="PwC" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/child" className="nav-link" >Child</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/parent" className="nav-link" >Parent</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/userdata" className="nav-link" >UserData</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    );
}
export default Header;

