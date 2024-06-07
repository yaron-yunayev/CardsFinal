import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import EditCardPage from "../cards/pages/EditCardPage";
import AddCardPage from "../cards/pages/AddCardPage";
import MainPage from "../pages/MainPage";
import MyCards from "../pages/MyCards";
import CardsDeck from "../pages/CardsDeck";
import SearchResultsPage from "../pages/SearchResultPage";
import MyProfilePage from "../pages/MyProfilePage";
import EditMyUser from "../pages/EditMyUser";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<MainPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<CardsDeck />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.SEARCH_RESULTS} element={<SearchResultsPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<MyProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditMyUser />} />



    </Routes>
  );
}
