import { useState } from "react";
import RecipePage from "./RecipeList";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import RecipeDetail from "./RecipeDetailPage";

const HomePage = ({ recipeList }) => {
  // const [recipe, setRecipe] = useState({ RecipeData });
  const [recipeId, setRecipeId] = useState(0);

  console.log("Homepage RecipeList", recipeList);

  return (
    <div>
      <h1>Home Page</h1>

      <Container>
        <InnerContainer>
          <RecipePage recipeList={recipeList} setRecipeId={setRecipeId} />
        </InnerContainer>

        <InnerContainer>
          <RecipeDetail recipeList={recipeList} RecipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default HomePage;
