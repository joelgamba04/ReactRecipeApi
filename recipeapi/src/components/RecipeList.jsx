import RecipeDetail from "./RecipePage.jsx";

const RecipesPage = ({ RecipeData, setRecipeId }) => {
  return (
    <div>
      <h1>Recipe List</h1>

      {RecipeData.map((recipe) => (
        <div key={recipe.id}>
          <RecipeDetail recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
