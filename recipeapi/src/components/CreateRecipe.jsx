import { useState } from "react";

const CreateRecipe = ({ recipeList, setList, newRecipeId, setNewRecipeId }) => {
  const [recipe, setRecipe] = useState({
    id: 0,
    name: "",
    description: "",
    instructions: "",
    ingredients: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipeId = Number(Math.floor(Math.random() * 1000));
    const updatedRecipe = { ...recipe, id: newRecipeId };
    setRecipe({ ...recipe, id: updatedRecipe });
    // setRecipe((prevState) => ({ ...prevState, id: newRecipeId }));

    setList([...recipeList, recipe]);

    console.log("Added new recipe", recipe);
    console.log("Recipe List", recipeList);

    setRecipe({
      id: 0,
      name: "",
      description: "",
      instructions: "",
      ingredients: "",
    });
  };
  function handleSubmit1(event) {
    event.preventDefault();
    const newId = Number(Math.floor(Math.random() * 1000));
    console.log("New ID", newId);
    setRecipe({ ...recipe, id: newId });
    // Manually add the id

    // setNewRecipeId(newRecipeId + 1);

    setList([...recipeList, recipe]);
    console.log("Added new recipe", recipe);
    console.log("Recipe List", recipeList);

    setRecipe({
      id: 0,
      name: "",
      description: "",
      instructions: "",
      ingredients: "",
    });
  }
  return (
    <div>
      <h1>Create Recipe</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            value={recipe.description}
            onChange={(e) =>
              setRecipe({ ...recipe, description: e.target.value })
            }
            placeholder="Description"
          />
          <input
            type="text"
            value={recipe.instructions}
            onChange={(e) =>
              setRecipe({ ...recipe, instructions: e.target.value })
            }
            placeholder="Instructions"
          />
          <input
            type="text"
            value={recipe.ingredients}
            onChange={(e) =>
              setRecipe({ ...recipe, ingredients: e.target.value })
            }
            placeholder="Ingredients"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
