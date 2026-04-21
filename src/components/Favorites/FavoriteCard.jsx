function FavoriteCard({ recipe, isFavorite, toggleFavorite }) {
  return (
    <div style={{
      backgroundColor:'white'
    }}>
      <h3>{recipe.name}</h3>
      <p>{recipe.image}</p>
      {/* <img src={recipe.image} alt={recipe.name} width="150" /> */}

      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default FavoriteCard;