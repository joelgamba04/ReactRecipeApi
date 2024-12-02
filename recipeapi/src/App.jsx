import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import CreateRecipe from "./components/CreateRecipe";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/create" element={<CreateRecipe />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
