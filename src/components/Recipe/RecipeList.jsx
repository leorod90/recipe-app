import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, favorites, toggleFavorite }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeList;