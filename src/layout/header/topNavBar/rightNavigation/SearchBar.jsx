
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../providers/CoustomThemeProvider";
import { getCard, getCards } from "../../../../cards/services/cardsApiService";


const SearchBar = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
   
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (["home", "about", "my cards"].includes(lowerCaseQuery)) {
      switch (lowerCaseQuery) {
        case "home":
          navigate("/home");
          return;
        case "about":
          navigate("/about");
          return;
        case "my cards":
          navigate("/my-cards");
          return;
        default:
          break;
      }
    }


    try {
      const cards = await getCards();
      const filteredCards = cards.filter(card => card.title.toLowerCase().includes(lowerCaseQuery));
      navigate(`/search-results?q=${searchQuery}`, { state: { cards: filteredCards } });
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box display="inline-flex">
      <FormControl variant="outlined">
        <OutlinedInput
          sx={{
            backgroundColor: isDark ? "#333333" : "#e8f5e9",
            color: isDark ? "#ffffff" : "#2e7d32", 
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#ffffff" : "#2e7d32",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#ffffff" : "#2e7d32",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#ffffff" : "#2e7d32", 
            },
          }}
          placeholder="the card finder"
          size="small"
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleSearch}>
                <SearchIcon sx={{ color: isDark ? "#ffffff" : "#2e7d32" }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;