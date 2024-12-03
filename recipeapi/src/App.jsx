import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateRecipe from "./components/CreateRecipe";
import PageNotFound from "./components/PageNotFound";
import RecipeData from "./helpers/RecipeData";
import HomePage from "./components/HomePage";

const App = () => {
  const [recipeList, setRecipeList] = useState(RecipeData);
  const [newRecipeId, setNewRecipeId] = useState(RecipeData.length + 1);

  const addToList = (newRecipe) => {
    // use previous state to add the new recipe
    setRecipeList((prevList) => [...prevList, newRecipe]);
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage recipeList={recipeList} setRecipeList={setRecipeList} />
            }
          />
          <Route
            path="/create"
            element={
              <CreateRecipe
                addToList={addToList}
                newRecipeId={newRecipeId}
                setNewRecipeId={setNewRecipeId}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
