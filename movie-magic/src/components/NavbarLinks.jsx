import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faFaceDizzy } from "@fortawesome/free-solid-svg-icons";

const NavbarLinks = () => {
  return (
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
          to="/top-rated"
          className={`${
            window.location.pathname === "/rated-movies" ? "active" : ""
          } text-[#3689e3] `}
        >
          <span>
            <FontAwesomeIcon icon={faFaceDizzy} className="mr-2" />
          </span>
          Rated Movies
        </Link>
      </li>
      <li>
        <Link
          to="/favorite"
          className={`${
            window.location.pathname === "/watched-movies" ? "active" : ""
          } text-[#3689e3]`}
        >
          <span>
            <FontAwesomeIcon icon={faEye} className="mr-2" />
          </span>
          Favorite Movies
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
