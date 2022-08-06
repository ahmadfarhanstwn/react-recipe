import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StyledSearch } from "../components_style/Styled";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate("/search/" + searchInput);
  };

  return (
    <StyledSearch onSubmit={submitSearch}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />
      </div>
    </StyledSearch>
  );
}

export default Search;
