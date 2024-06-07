import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";

import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";

import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProviders";
import initialSignupForm from "../helpers/intialForms/initialSignupForm";

export default function SignupPage() {
  const { handleSignup } = useUsers();

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleSignup);

  const { user } = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (user) return <Navigate to={ROUTES.CARDS} replace />;
  
  return (
    <div>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignupForm
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
          title={"sign here to be new members"}
          errors={errors}
          data={data}
          onInputChange={handleChange}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      </Container>
    </div>
  );
}
