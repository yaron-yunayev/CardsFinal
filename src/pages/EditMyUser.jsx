import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUsers from "../users/hooks/useUsers";
import { getUser } from "../users/services/localStorageService";
import useForm from "../forms/hooks/useForm";
import { Container } from "@mui/material";
import EditForm from "../users/components/EditForm";
import ROUTES from "../routes/routesModel";
import initialEditForm from "../users/helpers/intialForms/initialEditForm";
import editSchema from "../users/models/editschema";
import userToModel from "../users/helpers/intialForms/userToModel";

export default function EditUserPage() {
  const { handleUpdateUser, handleGetUser } = useUsers();
  const user = getUser();
  
  const {
    data,
    setData,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialEditForm, editSchema, (newUser) => {
    handleUpdateUser(user, newUser);
  });

  useEffect(() => {
    if (!user) {
      return <Navigate replace to={ROUTES.CARDS} />;
    } else {
      handleGetUser(user._id).then((data) => {
        const modelUser = userToModel(data);
        setData(modelUser);
      });
    }
  }, [handleGetUser, setData, user._id]);
  

  const confirmEdit = () => {
    onSubmit(onSubmit);
  };

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditForm
        onSubmit={confirmEdit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"edit form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}
