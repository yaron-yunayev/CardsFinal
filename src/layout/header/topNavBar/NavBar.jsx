import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Box, Toolbar } from "@mui/material";
import RightNavBar from "./rightNavigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";
import { useTheme } from "../../../providers/CoustomThemeProvider";

export default function NavBar() {
  const { isDark } = useTheme();
  return (
    <MenuProvider>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1201 }}>
        <AppBar elevation={10} sx={{ backgroundColor: isDark ? '#000000' : '#320d53' }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <LeftNavBar />
            <RightNavBar />
          </Toolbar>
        </AppBar>
      </Box>
    </MenuProvider>
  );
}
