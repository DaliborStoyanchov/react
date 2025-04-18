import classes from "./GitHubProfileFinder.module.css";

const GitHubProfileFinder = () => {
  return (
    <div className={classes.gitHubProfileFinderContainer}>
      <div className={classes.inputWrapper}>
        <form>
          <input
            type="text"
            name="searchByUsername"
            placeholder="Search Github Username"
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
