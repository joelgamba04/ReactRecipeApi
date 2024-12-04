const RecipeDetail = ({ recipeList, recipeId, setRecipeList }) => {
  console.log("RecipeDetail recipeId:", recipeId);
  const deleteRecipe = () => {
    // console.log("Delete Recipe with ID:", recipeId);
    setRecipeList(
      recipeList.filter((recipe) => {
        if (recipe.id !== recipeId) {
          // console.log("Recipe reatained", recipeId, ":", recipe.id);
        }
        return recipe.id !== recipeId;
      })
    );
  };

  const updateRecipe = () => {
    const updatedRecipe = {
      ...recipe,
      name: prompt("Enter new name:", recipe.name),
      description: prompt("Enter new description:", recipe.description),
      instructions: prompt("Enter new instructions:", recipe.instructions),
      ingredients: prompt("Enter new ingredients:", recipe.ingredients),
    };

    setRecipeList(
      recipeList.map((r) => (r.id === recipeId ? updatedRecipe : r))
    );
  };

  const favoriteRecipe = () => {
    const newRecipeList = recipeList.filter((recipe) => recipe.id !== recipeId);
    setRecipeList([recipe, ...newRecipeList]);
  };

  const recipe = recipeList.filter((recipe) => recipe.id === recipeId)[0];
  // console.log("RecipeDetail recipe", recipe); // Add this line for debug information

  if (!recipe) {
    // console.log("Recipe Not Found recipeId:", recipeId);
    return (
      <div>
        <h1>Recipe Not Found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Recipe Detail</h1>

      <p>{"Recipe Name: " + recipe.name}</p>
      <p>{"Description: " + recipe.description}</p>
      <p>{"Instructions: " + recipe.instructions}</p>
      <p>{"Ingredients: " + recipe.ingredients}</p>

      <button onClick={updateRecipe}>Edit Recipe</button>
      <button onClick={deleteRecipe}>Delete Recipe</button>
      <button onClick={favoriteRecipe}>Make it Favorite</button>
    </div>
  );
};

export default RecipeDetail;
