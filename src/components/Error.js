import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p>Page not found!</p>
            <h3>{error.status}</h3>
        </div>
    );
}
export default Error;