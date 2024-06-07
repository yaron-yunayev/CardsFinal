import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightIcon from "@mui/icons-material/Light";
import { Box, IconButton, List, ListItem, ListItemText, Tooltip, Zoom } from "@mui/material";
import React, { useState } from "react";
import Logged from "./Looged";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProviders.jsx";
import { useTheme } from "../../../../providers/CoustomThemeProvider.jsx";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function RightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  const [cards, setCards] = useState([]); // State to store cards data

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <SearchBar />
      </Box>

      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
        {isDark ? (
          <Tooltip title="Light Mode" TransitionComponent={Zoom} arrow>
            <LightIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Dark Mode" TransitionComponent={Zoom} arrow>
            <DarkModeIcon />
          </Tooltip>
        )}
      </IconButton>
      {user && <Logged />}
      {!user && <NotLogged />}

      {user && (
        <List>
          {cards.map((card) => (
            <ListItem key={card.id} component={Link} to={card.url}>
              <ListItemText primary={card.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
