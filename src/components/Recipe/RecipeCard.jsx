import { useState } from 'react'

function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
  console.log(recipe)
  const [favorite, setFavorite] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [hovered, setHovered] = useState(false);

  const favHandler = () => {
    setFavorite(!favorite);
    console.log(recipe.name, favorite)
  }

  return (
    <div className="recipe-card"
    // onMouseEnter={() => setHovered(true)}
    // onMouseLeave={()=> setHovered(false)}
    // style={{
    //   backgroundColor: hovered === true ? "red" : "white"
    // }}
    >
      <h2 className="recipe-title">{recipe.name}</h2>
      <p>{"⭐".repeat(recipe.rating)}</p>

      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>


      <p className="recipe-description">
        {recipe.description}
      </p>

      <p className="recipe-image">{recipe.image}</p>

      <p className="recipe-time">⏱ {recipe.cookTime}</p>

      <button onClick={() => setShowIngredients(!showIngredients)}>
        Toggle Ingredients
      </button>
      {showIngredients && (
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecipeCard;