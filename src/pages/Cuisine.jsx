import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, CuisineCard } from "../components_style/Styled";

function Cuisine() {
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  let params = useParams();

  const getCuisineRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisineRecipes(recipes.results);
    console.log(recipes);
  };

  useEffect(() => {
    getCuisineRecipes(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisineRecipes.map((recipe) => {
        return (
          <Link to={"/details/" + recipe.id}>
            <CuisineCard key={recipe.id}>
              <img src={recipe.image} alt="" />
              <h4>{recipe.title}</h4>
            </CuisineCard>
          </Link>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
