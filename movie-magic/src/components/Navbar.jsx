import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faFaceDizzy } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-transparent text-white">
        <img src={logo} alt="LOGO" className="mb-4 md:mb-0 logo" />
        <div className="flex items-center justify-between bg-white text-black rounded-lg p-2 mb-4 md:mb-0">
          <input
            type="text"
            id="search"
            className="p-1 focus:outline-none"
            placeholder="Search Movie by Name"
          />
          <button className="btn">Search</button>
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link
              to="/"
              className={`${
                window.location.pathname === "/" ? "active" : ""
              } text-[#3689e3]`}
            >
              <span>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rated-movies"
              className={`${
                window.location.pathname === "/rated-movies" ? "active" : ""
              } text-[#3689e3]`}
            >
              <span>
                <FontAwesomeIcon icon={faFaceDizzy} className="mr-2" />
              </span>
              Rated Movies
            </Link>
          </li>
          <li>
            <Link
              to="/watched-movies"
              className={`${
                window.location.pathname === "/watched-movies" ? "active" : ""
              } text-[#3689e3]`}
            >
              <span>
                <FontAwesomeIcon icon={faEye} className="mr-2" />
              </span>
              Watched Movies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
