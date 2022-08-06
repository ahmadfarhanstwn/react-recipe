import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CuisineCard, Grid } from "../components_style/Styled";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearchedRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes);
  };

  useEffect(() => {
    getSearchedRecipes(params.searched);
    console.log(params.searched);
  }, [params.searched]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
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

export default Searched;
