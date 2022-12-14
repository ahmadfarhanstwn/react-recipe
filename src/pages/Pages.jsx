import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:searched" element={<Searched />} />
      <Route path="/details/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default Pages;
