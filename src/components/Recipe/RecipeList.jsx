import RecipeCard from "./RecipeCard";
import "./Recipe.css"

function RecipeList({ recipes, favorites, toggleFavorite }) {
  return (
    <div className="recipe-container"
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