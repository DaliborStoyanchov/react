import classes from "./Search.module.css";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className={classes.searchEngine}>
      <input
        type="text"
        className={classes.citySearch}
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
