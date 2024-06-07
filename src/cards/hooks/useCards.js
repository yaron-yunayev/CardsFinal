import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard.js";
import { useSnack } from "../../providers/SnackbarProvider.jsx";
import { changeLikeStatus, createCard, deleteCard, editCard, getCard, getCards, getLocationCoordinate } from "../services/cardsApiService.js";
import normalizeAddress from "../helpers/normalization/normalizeAddress";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const setSnack = useSnack();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const [mapCenter, setMapCenter] = useState({});

  const [like, setLiked] = useState("");

  useAxios();
  
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const newCard = await createCard(normalizeCard(cardFromClient));
        setCards(prevCards => [...prevCards, newCard]); // להוסיף את הכרטיס החדש לרשימה
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.CARDS);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const updatedCard = await editCard(cardId, normalizeCard(cardFromClient));
        setCards(prevCards => prevCards.map(card => card._id === cardId ? updatedCard : card));
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback(
    async (id) => {
      try {
        await deleteCard(id);
        setCards(prevCards => prevCards.filter(card => card._id !== id)); // להסיר את הכרטיס מהרשימה
        setSnack("success", "The business card has been deleted");
      } catch (error) {
        setError(error.message);
      }
    },
    [setSnack]
  );

  const handleCardLike = useCallback(async (id, user) => {
    try {
      const card = await changeLikeStatus(id);
      setSnack("primary", "you liked card " + id);
      setCard(card);

      if (user && user._id) {
        const isLiked = card.likes.includes(user._id);
        setLiked(isLiked ? "red" : "gray");
        getAllCards();
      } else {
        console.log("User is undefined or does not have an _id");
      }

      console.log(card);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const addressForMap = useCallback(async (address) => {
    setIsLoading(true);
    setError(null);
    try {
      const center = await getLocationCoordinate(normalizeAddress(address));
      setMapCenter(center);
    } catch (error) {
      setMapCenter(false);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
    addressForMap, 
    mapCenter, 
  };
}
