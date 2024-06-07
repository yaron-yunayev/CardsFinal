import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { Container, Grid, Paper, Typography } from '@mui/material'
import useCards from '../cards/hooks/useCards';
import CardsFeedback from '../cards/components/CardsFeedback';
import AddNewCardButton from '../cards/components/AddNewCardButton';

export default function CardsDeck() {
    const {
      cards,
      error,
      isLoading,
      getAllCards,
      handleCardLike,
      handleCardDelete,
    } = useCards();
  
    useEffect(() => {
      getAllCards();
    }, [getAllCards]);
  
    return (
      <div style={{ height: '600px',marginTop:"100px" }}>

        <PageHeader
          title="my favava cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          cards={cards}
          handleDelete={handleCardDelete}
          handleLike={handleCardLike}
          isLoading={isLoading}
          error={error}
        />
        <AddNewCardButton />
      </div>
    );
}
