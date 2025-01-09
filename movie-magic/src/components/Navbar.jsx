import logo from "../img/logo.png";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black bg-opacity-80 text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="LOGO"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow md:mx-6">
        <SearchBar />
      </div>

      {/* Navbar Links */}
      <div>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
