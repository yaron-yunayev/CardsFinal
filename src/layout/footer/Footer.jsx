import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useUser } from "../../users/providers/UserProviders";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser(); 

  return (
    <Paper elevation={3} sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, zIndex: 1, backgroundColor: '#320d53'}}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="About" icon={<InfoIcon sx={{ color: '#320d53' }} />} onClick={() => navigate(ROUTES.ABOUT)} />
        {user ? <BottomNavigationAction label="Favorite" icon={<StyleIcon sx={{ color: '#320d53' }} />} onClick={() => navigate(ROUTES.FAV_CARDS)} /> : null}
        {(user && (user.isBusiness || user.isAdmin)) ? <BottomNavigationAction label="My Cards" icon={<AccountBoxIcon sx={{ color: '#320d53' }} />} onClick={() => navigate(ROUTES.MY_CARDS)} /> : null}
      </BottomNavigation>
    </Paper>
  );
}
