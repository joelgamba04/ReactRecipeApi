import RecipePage from "./RecipeList";
import Container from "./Container";
import InnerContainer from "./InnerContainer";

const HomePage = ({ RecipeData }) => {
  return (
    <div>
      <h1>Home Page</h1>

      <Container>
        <InnerContainer>
          <RecipePage RecipeData={RecipeData} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default HomePage;
