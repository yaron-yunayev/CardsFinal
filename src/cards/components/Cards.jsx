import React from "react";
import CardComponent from "./card/CardComponent";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useUser } from "../../users/providers/UserProviders";

export default function Cards({ cards, handleCardDelete, handleCardLike }) {
  const location = useLocation();
  const { user } = useUser();
   console.log("start");
  if (location.pathname === "/fav-cards") {
    const filterTheLikes = cards.filter((card) => card.likes.includes(user._id));
    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {filterTheLikes.map((card) => (
          <CardComponent
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        ))}
      </Container>
    );
  }

  if (location.pathname === "/my-cards") {
    const myFilteredCards = cards.filter(
      (card) => card.user_id === user._id
      
    );
    console.log("hello");
    return myFilteredCards.length === 0 ? (
      <Typography>Oops.. it seems you have no cards to display</Typography>
    ) : (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {myFilteredCards.map((card) => (
          <CardComponent
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        ))}
      </Container>
    );
  }

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}
