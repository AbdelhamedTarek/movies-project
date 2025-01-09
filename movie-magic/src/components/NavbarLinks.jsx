import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHome, faFaceDizzy } from "@fortawesome/free-solid-svg-icons";

const NavbarLinks = () => {
  const location = useLocation();

  return (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-lg font-medium">
      {/* Home Link */}
      <li>
        <Link
          to="/"
          className={`flex items-center transition duration-300 ${
            location.pathname === "/"
              ? "text-blue-500 underline underline-offset-4"
              : "text-gray-300 hover:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={faHome} className="mr-2 text-xl" />
          Home
        </Link>
      </li>

      {/* Rated Movies Link */}
      <li>
        <Link
          to="/top-rated"
          className={`flex items-center transition duration-300 ${
            location.pathname === "/top-rated"
              ? "text-blue-500 underline underline-offset-4"
              : "text-gray-300 hover:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={faFaceDizzy} className="mr-2 text-xl" />
          Rated Movies
        </Link>
      </li>

      {/* Favorite Movies Link */}
      <li>
        <Link
          to="/favorite"
          className={`flex items-center transition duration-300 ${
            location.pathname === "/favorite"
              ? "text-blue-500 underline underline-offset-4"
              : "text-gray-300 hover:text-blue-400"
          }`}
        >
          <FontAwesomeIcon icon={faEye} className="mr-2 text-xl" />
          Favorite Movies
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
