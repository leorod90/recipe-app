function FavoriteCard({
  recipe,
  isFavorite = null,
  toggleFavorite = null
}) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 1,
    }}>
      <h3>{recipe.name}</h3>
      <p>{recipe.image}</p>
      {/* <img src={recipe.image} alt={recipe.name} width="150" /> */}

     {isFavorite &&  <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>}
    </div>
  );
}

export default FavoriteCard;