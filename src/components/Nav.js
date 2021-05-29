import { React } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav nav-tabs p-3  justify-content-center " style={{backgroundColor:"gray",}}>
    
      <li className="nav-item " style={{color:"red" }}>
        <Link className="nav-link fs-2" aria-current="page" to="/website" style={{color:"black"}}>
         Strona główna
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="xd"
          role="button"
          aria-expanded="false"
        >
          Więcej
        </Link>
        <ul className="dropdown-menu">
          <Link className="nav-link" to="/website/weather">
            Pogoda
          </Link>
          <Link className="nav-link" to="/website/generator">
            Generator
          </Link>
        </ul>
      </li>
    </ul>
  );
};

export default Nav;
