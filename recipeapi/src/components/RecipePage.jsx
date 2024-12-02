const RecipePage = ({ recipe, setRecipeId }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {/* <p>{recipe.instructions}</p>
      <p>{recipe.ingredients}</p> */}
      <button onClick={() => setRecipeId(recipe.id - 1)}>View Recipe</button>
    </div>
  );
};

export default RecipePage;
