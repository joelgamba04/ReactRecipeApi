import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateRecipe from "./components/CreateRecipe";
import PageNotFound from "./components/PageNotFound";
import RecipeData from "./helpers/RecipeData";
import HomePage from "./components/HomePage";

function App() {
  const [list, setList] = useState(RecipeData);
  const [newRecipeId, setNewRecipeId] = useState(RecipeData.length);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage RecipeData={list} />} />
          <Route
            path="/create"
            element={
              <CreateRecipe
                recipeList={list}
                setList={setList}
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
}

export default App;
