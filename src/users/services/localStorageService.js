import { jwtDecode } from "jwt-decode";

const TOKEN = "my token";

const setTokenInLocalStorage = (token) => {
  localStorage.setItem(TOKEN, token);
};

const removeTokenFromLocalStorage = () => localStorage.removeItem(TOKEN);

const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN);

const getUser = () => {
  try {
    const myToken = getTokenFromLocalStorage();
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};


export const updateLikedStatus = (liked) => {
  // Retrieve existing token payload
  const tokenPayload = localStorage.getItem(TOKEN);
  if (tokenPayload) {
    // Parse the payload
    const parsedPayload = JSON.parse(tokenPayload);
    // Update the liked status
    parsedPayload.liked = liked;
    // Save the updated payload in local storage
    localStorage.setItem(TOKEN, JSON.stringify(parsedPayload));
  }
};
export {
  setTokenInLocalStorage,
  removeTokenFromLocalStorage,
  getTokenFromLocalStorage,
  getUser,
};
