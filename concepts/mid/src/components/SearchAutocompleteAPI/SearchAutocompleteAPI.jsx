import { useEffect, useState } from "react";
import classes from "./SearchAutocompleteAPI.module.css";

const URL = "https://dummyjson.com/users";

const SearchAutocompleteAPI = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function fetchListOfUsers(url) {
    setLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users);
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

  return (
    <div className={classes.searchAutoCompleteContainer}>
      <input type="text" name="users" placeholder="Search users here..." />
    </div>
  );
};

export default SearchAutocompleteAPI;
