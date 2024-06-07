import React from "react";
import { string, number, oneOfType } from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = ({ color, size, height }) => {
  console.log("SPINNER");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center vertically
        minHeight: "100vh",    // Set minimum height to viewport height
      }}
    >
      <CircularProgress color={color} size={size} />
    </Box>
  );
};

Spinner.propTypes = {
  color: string,
  size: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Spinner;
