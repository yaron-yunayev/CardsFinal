import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function LogoIcon() {
  return (
    <>
    <NavBarLink to={ROUTES.ROOT}     >
      <IconButton>
        <Avatar
          src="/assets/images/gamen-icon.jpg"
          alt="Business card icon"
        />
      </IconButton>
      </NavBarLink>
    </>
  );
}