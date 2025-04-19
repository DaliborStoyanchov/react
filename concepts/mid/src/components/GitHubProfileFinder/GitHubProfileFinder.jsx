import { useEffect, useState } from "react";
import classes from "./GitHubProfileFinder.module.css";

function GitHubProfileFinder() {
  const [userName, setUserName] = useState("DaliborStoyanchov");
  const [] = useState();

  function handleSubmit() {}

  async function fetchUserGithubData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
  }

  useEffect(() => {
    fetchUserGithubData();
  }, []);

  return (
    <div className={classes.gitHubProfileFinderContainer}>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          name="searchByUsername"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default GitHubProfileFinder;
