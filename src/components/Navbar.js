import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
let Navbar = () => {
  let MainLocation = useLocation();
  let [ShowLinks, SetShowLinks] = useState(false);
  let [Loc, SetLoc] = useState("");

  let Change = () => {
    SetLoc(MainLocation.pathname);
  };
  useEffect(() => {
    Change();
  });
  return (
    <div className="Navbar">
      <i
        className={`fa-solid fa-bars Show ${ShowLinks ? "Active" : ""}`}
        onClick={() => SetShowLinks(!ShowLinks)}
      ></i>

      <h2>Boolean Algebra Solver</h2>
      <div className={`${ShowLinks ? "Active" : ""} Links`}>
        <Link
          to="/"
          onClick={Change}
          className={`${Loc === "/" ? "Active" : ""}`}
        >
          MinTerms
        </Link>
        <Link
          to="/BooleanFunction"
          onClick={Change}
          className={`${Loc === "/BooleanFunction" ? "Active" : ""}`}
        >
          Boolean Function
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
