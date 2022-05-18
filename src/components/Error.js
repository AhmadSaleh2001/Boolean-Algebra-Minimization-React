import { Link } from "react-router-dom";
let Error = () => {
  return (
    <div className="Error">
      <h3>
        Page Not Found <i className="fa-solid fa-face-frown"></i>
      </h3>
      <Link to="/">Back To Home</Link>
    </div>
  );
};
export default Error;
