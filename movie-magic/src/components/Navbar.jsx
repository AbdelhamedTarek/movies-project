const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <img src="" alt="LOGO" className="mb-4 md:mb-0" />
      <div className="flex items-center bg-white text-black rounded-lg p-2 mb-4 md:mb-0">
        <input
          type="text"
          id="search"
          className="p-1 focus:outline-none"
          placeholder="Search Movie by Name"
        />
        <button>Search</button>
      </div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li>Home</li>
        <li>Rated Movies</li>
        <li>Watched Movies</li>
      </ul>
    </nav>
  );
};

export default Navbar;
