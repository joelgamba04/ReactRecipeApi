import { useState } from "react";

const CreateRecipe = ({ addToList, newRecipeId, setNewRecipeId }) => {
  const [recipe, setRecipe] = useState({
    id: 0,
    name: "",
    description: "",
    instructions: "",
    ingredients: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...recipe,
      id: newRecipeId,
    };

    setNewRecipeId(newRecipeId + 1);

    addToList(newRecipe);
  };

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
