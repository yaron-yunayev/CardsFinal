import React from "react";
import useForm from "../../forms/hooks/useForm";
import GamepadIcon from '@mui/icons-material/Gamepad';
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { Navigate, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import useUsers from "../hooks/useUsers";
import initialLoginForm from "../helpers/intialForms/initialLoginForm";
import { useUser } from "../providers/UserProviders";

export default function LoginPage() {
  const { handleLogin } = useUsers();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);
  const { user } = useUser();

  const handleLoginFormSubmit = () => {
    const attemptsKey = `loginAttempts_${data.email}`;
    const attempts = parseInt(localStorage.getItem(attemptsKey)) || 0;
    if (attempts >= 3) {
      alert("You have exceeded the maximum number of login attempts. Your account has been blocked for 24 hours.");
      return;
    }
    console.log("Submitting login form...");
    onSubmit();
  };

  if (user) return <Navigate to={ROUTES.CARDS} replace />;

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="welcome back gamer!"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={handleLoginFormSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component={Link}
              to={ROUTES.SIGNUP}
              startIcon={<GamepadIcon />}
              sx={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Form>
      </Container>
    </Container>
  );
}
