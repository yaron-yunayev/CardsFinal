import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        my: 4, // Adjust margin as needed
        mt: 9, // Margin top
      }}
    >
      <Typography variant='h2' component="h1" sx={{ color: "white" }}>{title}</Typography>
      <Typography variant='h5' component="h2" sx={{ color: "white" }}>{subtitle}</Typography>
      <Divider sx={{my: 2}} />
    </Box>
  );
};

export default PageHeader;

