import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "../../providers/CoustomThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#333333" : "#7927aa",
        overflowY: 'auto'
      }}
    >
      {children}
    </Box>
  );
}
