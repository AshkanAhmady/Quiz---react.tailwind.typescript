import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFound;
