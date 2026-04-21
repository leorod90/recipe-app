import recipes from "./data/recipes"
import SearchBar from "./components/SearchBar"
import RecipeList from "./components/Recipe/RecipeList";
import FavoritesSection from "./components/Favorites/FavoritesSection"
import { useState } from "react"

function App() {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const toggleFavorite = (id) => {
    // Check: is this recipe already in favorites?
    if (favorites.includes(id) === true) {

      // YES → remove it from favorites
      setFavorites(
        favorites.filter((favId) => favId !== id)
      );

    } else {

      // NO → add it to favorites
      setFavorites(
        [...favorites, id]
      );
    }
  };
  // searching the original recipes.js and keep matching IDs
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  // filter recipe by name and check if it includes input
  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <FavoritesSection
        favoriteRecipes={favoriteRecipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <RecipeList
        recipes={filteredRecipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default App;