import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/intialForms/intialCardForm";
import cardSchema from "../models/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";
import CardForm from "../components/CardForm";








export default function EditCardPage() {
  //what do we need in this page
  //id of the card - useParams
  const { id } = useParams();
  //handleUpdateCard & handleGetCard & card - useCards
  const { handleUpdateCard, getCardById, card } = useCards();

  //user - useUser (provider)
  const { user } =useUser();
  //useForm (initialForm,schema,onSubmit)
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (newCard) =>
    handleUpdateCard(card._id, newCard)
  );
  //useEffect - update the form data to this card data
  useEffect(() => {
    getCardById(id).then((data) => {
      const modelCard = mapCardToModel(data);
      setData(modelCard);
    });
  }, [getCardById, setData, id]);

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
      {data && (
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      )}
    </Container>
  );
}