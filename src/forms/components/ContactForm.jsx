import React, { useCallback } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSnack } from "../../providers/SnackbarProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ContactForm = () => {
  const initialForm = {
    fullName: "",
    phoneNumber: "",
    favoriteGame: ""
  };

  const [data, setData] = React.useState(initialForm);
  const [errors, setErrors] = React.useState({});
  const setSnack = useSnack(); 

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    setSnack("success", "Form submitted successfully!");
    handleReset();
  };

  const validateForm = () => {
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#FFFFFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          p: { xs: 1, sm: 2 },
          background: 'default',
        }}
        autoComplete="off"
        noValidate
      >
        <Typography align="center" variant="h5" component="h1" mb={2}>
        Get in touch
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="fullName"
              name="fullName"
              label="Full Name"
              variant="outlined"
              autoComplete="off"
              value={data.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              type="number"

              autoComplete="off"
              value={data.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="favoriteGame"
              name="favoriteGame"
              label="Favorite Game"
              variant="outlined"
              autoComplete="off"
              value={data.favoriteGame}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} my={2} direction="row" width="100">
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth onClick={handleReset}   sx={{ bgcolor: '#6a1b9a' }}>
              Reset
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!validateForm()}
              sx={{ bgcolor: '#6a1b9a' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
