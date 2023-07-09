import classes from "./NotFound.module.css"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className={classes.error}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for could not be found.</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
};

export { NotFound };