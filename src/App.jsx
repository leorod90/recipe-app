import { use, useState } from "react"
import recipes from "./data/recipes"
import SearchBar from "./components/SearchBar"
import RecipeList from "./components/Recipe/RecipeList";
import FavoritesSection from "./components/Favorites/FavoritesSection"
import TopRecipes from "./components/TopRecipes";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [topRated, setTopRated] = useState();

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
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      {/* Main Layout */}
      <div style={{ display: "flex" }}>

        {/* Left: Favorites */}
        <div style={{ width: "30%" }}>
          <FavoritesSection
            favoriteRecipes={favoriteRecipes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>

        {/* Right Side */}
        <div style={{ width: "70%" }}>

          {/* Top 3 */}
          <TopRecipes recipes={recipes} />

          {/* All Recipes */}
          <RecipeList
            recipes={filteredRecipes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>

      </div>
    </div>
  )
}

export default App;