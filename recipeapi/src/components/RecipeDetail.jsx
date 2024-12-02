const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <p>{recipe.ingredients}</p>
    </div>
  );
};

export default RecipeDetail;
