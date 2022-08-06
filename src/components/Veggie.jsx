import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "../components_style/Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggieRecipes, setVeggieRecipes] = useState([]);

  useEffect(() => {
    getVeggieRecipe();
  }, []);

  const getVeggieRecipe = async () => {
    const cachedData = localStorage.getItem("veggieRecipes");
    if (cachedData) {
      setVeggieRecipes(JSON.parse(cachedData));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      setVeggieRecipes(data.recipes);
      localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));
    }
  };
  return (
    <Wrapper>
      <h2>Veggie Recipes</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggieRecipes.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={"/details/" + recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Veggie;
