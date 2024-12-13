import classes from "../css/Favorites.module.css";

const Favorites = () => {
  return (
    <div className={classes.favoritesEmpty}>
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
};

export default Favorites;
