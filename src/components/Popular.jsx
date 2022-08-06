import { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "../components_style/Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipe();
  }, []);

  const getPopularRecipe = async () => {
    const cachedData = localStorage.getItem("popularRecipes");
    if (cachedData) {
      setPopularRecipes(JSON.parse(cachedData));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      setPopularRecipes(data.recipes);
      localStorage.setItem("popularRecipes", JSON.stringify(data.recipes));
    }
  };
  return (
    <Wrapper>
      <h2>Popular Recipes</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popularRecipes.map((recipe) => {
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

export default Popular;
