import classes from "../css/Favorites.module.css";

const NoMoviesFound = () => {
  return (
    <div className={classes.favoritesEmpty}>
      <h2>No movies found</h2>
      <p>The movie you are searching for is not on the list.</p>
      <br />
      <p>
        Click{" "}
        <span>
          <a href="/">here</a>
        </span>{" "}
        to refresh the page, or search another movie.
      </p>
    </div>
  );
};

export default NoMoviesFound;
