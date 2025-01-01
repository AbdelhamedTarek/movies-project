/* eslint-disable react/prop-types */
const SearchBar = ({ search, setSearch }) => {
  function handleClick(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="flex items-center bg-white text-black rounded-full p-2 mb-4 md:mb-0 ">
      <input
        type="text"
        id="search"
        className="p-1 focus:outline-none"
        placeholder="Search Movie by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
