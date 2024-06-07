import React from "react";
import { Navigate } from "react-router-dom";
import cardSchema from "../models/cardSchema";
import { Container } from "@mui/material";
import initialCardForm from "../helpers/intialForms/intialCardForm";
import ROUTES from "../../routes/routesModel";

import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import CardForm from "../components/CardForm";

export default function AddCardPage() {
  const { user } = useUser();
  const { handleCreateCard } = useCards();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCardForm, cardSchema, handleCreateCard);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="Add Card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
}
