import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProviders";
import { useSnack } from "../../providers/SnackbarProvider";
import { getUserData, login, signup, updateUser } from "../services/userApiServices";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../normalization/normalizeUser";
import normalizedExistingUser from "../normalization/normalizedExistingUser";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser, setToken } = useUser();
  const setSnack = useSnack();

  const updateLoginAttempts = (email) => {
    const attemptsKey = `loginAttempts_${email}`;
    let attempts = parseInt(localStorage.getItem(attemptsKey)) || 0;
    attempts += 1;
    localStorage.setItem(attemptsKey, attempts);
    return attempts;
  };

  const handleLogin = useCallback(
    async (userLogin, isSigned = false) => {
      try {
        setIsLoading(true);
        const token = await login(userLogin);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
        isSigned
          ? setSnack("success", "SIGNED UP and LOGGED IN Successfully")
          : setSnack("success", "LOGGED IN Successfully");
        // Reset login attempts on successful login
        localStorage.removeItem(`loginAttempts_${userLogin.email}`);
      } catch (error) {
        setError(error.message);
        console.log(error);
        const attempts = updateLoginAttempts(userLogin.email);
        if (attempts >= 3) {
          setSnack("error", "You have exceeded the maximum number of login attempts. Your account has been blocked for 24 hours.");
        } else {
          setSnack("error", `Login failed. Attempt ${attempts}/3`);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [setToken, setUser, navigate, setSnack]
  );
  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    setSnack("success", "LOGGED OUT Successfully");
    window.location.href = ROUTES.LOGIN; // העברה לעמוד התחברות במקום רענון עמוד
  }, [setUser, setSnack]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin(
          {
            email: userFromClient.email,
            password: userFromClient.password,
          },
          true
        );
      } catch (error) {
        setError(error.message);
        setSnack("error", error.message);
      }
      setIsLoading(false);
    },
    [handleLogin, setSnack]
  );

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleUpdateUser = useCallback(
    async (user, userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = await updateUser(
          user._id,
          normalizedExistingUser(userFromClient)
        );
        setSnack(
          "success",
          `${normalizedUser.name.first} your details have been successfully updated`
        );
      } catch (error) {
        setError(error.message);
      }
      navigate(ROUTES.ROOT);
      setIsLoading(false);
    },
    [navigate, setSnack]
  );

  return {
    handleGetUser,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
    isLoading,
    error,
  };
}
