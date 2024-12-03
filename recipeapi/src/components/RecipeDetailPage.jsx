const RecipeDetail = ({ recipeList, RecipeId }) => {
  return (
    <div>
      <h1>Recipe Detail</h1>

      <p>{recipeList[RecipeId].name}</p>
      <p>{recipeList[RecipeId].description}</p>
      <p>{recipeList[RecipeId].instructions}</p>
      <p>{recipeList[RecipeId].ingredients}</p>
    </div>
  );
};

export default RecipeDetail;
