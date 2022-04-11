import { Link } from "react-router-dom";
import {Map} from 'immutable';

// remaining topics here - 
// ImmutableJS https://www.npmjs.com/package/immutable#getting-started 

const Page404 = () => {

    // similar to collection in Java 
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);

    return (
        <div className="container">
            <h1>Oops!</h1>
            <p>The page you are looking for is not found.</p>
            <Link className="btn btn-primary" to="/home" >Let's go home...</Link>

            <div>
                <p>ImmutableJS</p>
                <p>{map1.get('b')}</p>
                <p>{map2.get('b')}</p>
            </div>


        </div>
    );
}

export default Page404;