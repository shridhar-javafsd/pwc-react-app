import { Link } from "react-router-dom";
import Map from 'immutable';

// remaining topics here - 
// ImmutableJS https://www.npmjs.com/package/immutable#getting-started 





const Page404 = () => {

    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    // map1.get('b') + ' vs. ' + map2.get('b');


    return (
        <div className="container">
            <h1>Oops!</h1>
            <p>The page you are looking for is not found.</p>
            <Link className="btn btn-primary" to="/home" >Let's go home...</Link>

            <div>
                <p>ImmutableJS</p>
                <p>{map1}</p>
                <p>{map2}</p>
            </div>


        </div>
    );
}

export default Page404;