import { useEffect, useState } from "react";
import classes from "./GitHubProfileFinder.module.css";
import User from "./User";

function GitHubProfileFinder() {
  const [userName, setUserName] = useState("DaliborStoyanchov");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {}

  async function fetchUserGithubData() {
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (data) {
      setUserData(data);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchUserGithubData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

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
      <div className={classes.img}>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}

export default GitHubProfileFinder;
