const RecipePage = ({ recipe, setRecipeId }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <button onClick={() => setRecipeId(recipe.id)}>View Recipe</button>
    </div>
  );
};

export default RecipePage;
