import classes from "./GitHubProfileFinder.module.css";

export default function User({ user }) {
  const { avatar_url, followers, following, public_repos, name, login } = user;

  return (
    <div className={classes.user}>
      <div>
        <img src={avatar_url} className={classes.avatar} alt="user" />
      </div>
      <div>
        <a href={`https"//github.com${login}`}>{name || login}</a>
      </div>
    </div>
  );
}
