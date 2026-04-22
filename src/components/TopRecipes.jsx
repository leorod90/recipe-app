import FavoriteCard from "./Favorites/FavoriteCard";

function TopRecipes({ recipes }) {
  // [...] creates copy of array
  const top3Recipes = [...recipes]
    // compare 2 items (a, b), return bigger rating
    .sort((a, b) => b.rating - a.rating)
    // return the first 3
    .slice(0, 3);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'tan',
      padding:15
    }}>
      <h4>Top 3</h4>
      <div style={{
        display: 'flex',
        gap: 10
      }}>
        {top3Recipes.map((recipe) => (
          <FavoriteCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default TopRecipes;