import RecipeData from "../helpers/RecipeData.jsx";
import RecipeDetail from "./RecipeDetail.jsx";

const RecipePage = () => {
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

export default RecipePage;
