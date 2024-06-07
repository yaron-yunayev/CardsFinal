import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProviders";

export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
  userId,
  likes,
}) {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleCardEdit = (id) => {
    console.log("navigate to edit page for card " + id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>

      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        {user && likes.includes(user._id) ? (
          <IconButton onClick={() => handleCardLike(cardId, user)}>
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleCardLike(cardId, user)}>
            <FavoriteIcon />
          </IconButton>
        )}
      </Box>
    </CardActions>
  );
}
