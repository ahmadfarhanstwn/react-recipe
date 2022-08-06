import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailsWrapper, Info } from "../components_style/Styled";

function RecipeDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeButton, setActiveButton] = useState("instruction");

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    getDetails();
  }, [params.id]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeButton === "instruction" ? "active" : ""}
          onClick={() => {
            setActiveButton("instruction");
          }}
        >
          Instruction
        </Button>
        <Button
          className={activeButton === "ingredient" ? "active" : ""}
          onClick={() => {
            setActiveButton("ingredient");
          }}
        >
          Ingredients
        </Button>
        {activeButton === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeButton === "ingredient" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

export default RecipeDetails;
