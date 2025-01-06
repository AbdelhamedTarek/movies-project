/* eslint-disable react/prop-types */
import logo from "../img/logo.png";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";

const Navbar = ({ query, setQuery, setError }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-transparent text-white">
      <img src={logo} alt="LOGO" className="mb-4 md:mb-0 logo" />
      <SearchBar query={query} setQuery={setQuery} setError={setError} />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
