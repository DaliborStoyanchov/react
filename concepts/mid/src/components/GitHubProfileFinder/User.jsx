import classes from "./GitHubProfileFinder.module.css";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className={classes.user}>
      <div>
        <img src={avatar_url} className={classes.avatar} alt="user" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>

        <p>
          {" "}
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
          <p>Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
