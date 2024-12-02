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

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage RecipeData={list} />} />
          <Route path="/create" element={<CreateRecipe />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
