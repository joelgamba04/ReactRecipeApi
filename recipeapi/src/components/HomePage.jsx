import { useState } from "react";
import RecipePage from "./RecipeList";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import RecipeDetail from "./RecipeDetailPage";

const HomePage = ({ RecipeData }) => {
  // const [recipe, setRecipe] = useState({ RecipeData });
  const [recipeId, setRecipeId] = useState(0);

  console.log("Homepage Recipe Data", RecipeData);

  return (
    <div>
      <h1>Home Page</h1>

      <Container>
        <InnerContainer>
          <RecipePage RecipeData={RecipeData} setRecipeId={setRecipeId} />
        </InnerContainer>

        <InnerContainer>
          <RecipeDetail RecipeData={RecipeData} RecipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default HomePage;
