import RecipeDetail from "./RecipePage.jsx";

const RecipesPage = ({ recipeList, setRecipeId }) => {
  return (
    <div>
      <h1>Recipe List</h1>

      {recipeList.map((recipe) => (
        <div key={recipe.id}>
          <RecipeDetail recipe={recipe} setRecipeId={setRecipeId} />
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
