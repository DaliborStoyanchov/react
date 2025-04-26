import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const URL = "https://dummyjson.com/users";

const SearchAutocompleteAPI = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();

    setSearchParams(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers(url) {
    setLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers(URL);
  }, []);

  function handleClick(e) {
    setShowDropdown(false);
    setSearchParams(e.target.innerText);
    setFilteredUsers([]);
  }

  return (
    <div>
      {loading ? (
        <h2>Loading data, please wait</h2>
      ) : (
        <input
          type="text"
          name="users"
          value={searchParams}
          placeholder="Search users here..."
          onChange={handleChange}
        />
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutocompleteAPI;
