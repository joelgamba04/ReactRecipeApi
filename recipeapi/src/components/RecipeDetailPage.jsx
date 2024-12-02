const RecipeDetail = ({ RecipeData, RecipeId }) => {
  return (
    <div>
      <h1>Recipe Detail</h1>

      <p>{RecipeData[RecipeId].name}</p>
      <p>{RecipeData[RecipeId].description}</p>
      <p>{RecipeData[RecipeId].instructions}</p>
      <p>{RecipeData[RecipeId].ingredients}</p>
    </div>
  );
};

export default RecipeDetail;
