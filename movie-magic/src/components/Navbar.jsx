/* eslint-disable react/prop-types */
import logo from "../img/logo.png";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-transparent text-white">
      <img src={logo} alt="LOGO" className="mb-4 md:mb-0 logo" />
      <SearchBar search={search} setSearch={setSearch} />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
