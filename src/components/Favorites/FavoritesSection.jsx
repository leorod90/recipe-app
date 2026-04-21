import FavoriteCard from "./FavoriteCard";

function FavoritesSection({
  favoriteRecipes,
  favorites,
  toggleFavorite
}) {
  return (
    <>
      <h2>Favorites</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10
      }}>
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((recipe) => (
            <FavoriteCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p>Favorites are empty</p>
        )}
      </div>
    </>
  );
}

export default FavoritesSection;