import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Error = ({ errorMessage, is404 }) => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="initial">
            {is404 ? (
              <>
                404 - Page Not Found <br />
                <Link to="/">Go back to home</Link>
              </>
            ) : (
              `Oops... something went wrong: ${errorMessage}`
            )}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            width="100%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;



