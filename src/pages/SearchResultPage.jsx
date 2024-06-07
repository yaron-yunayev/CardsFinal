
import React from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const location = useLocation();
  const { cards } = location.state || { cards: [] };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Search Results</Typography>
      {cards.length ? (
        cards.map(card => (
          <Card key={card._id} sx={{ marginTop: 2, border: "1px solid #2e7d32" }}>
     <CardActionArea component={Link} to={`/card-info/${card._id}`}>
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No results found for "{query}"</Typography>
      )}
    </Box>
  );
};

export default SearchResultsPage;