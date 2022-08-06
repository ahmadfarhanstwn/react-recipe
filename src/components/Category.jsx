import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { CategoryList } from "../components_style/Styled";
import { StyledNavLink } from "../components_style/Styled";

function Category() {
  return (
    <CategoryList>
      <StyledNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledNavLink>
    </CategoryList>
  );
}

export default Category;
