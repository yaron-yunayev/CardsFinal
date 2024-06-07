import React from "react";
import {
  Avatar,
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../users/services/localStorageService";
import useUsers from "../users/hooks/useUsers";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import ROUTES from "../routes/routesModel";

export default function MyProfilePage() {
  const { handleGetUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = getUser();
    if (!user) {
      return navigate(ROUTES.CARDS);
    }
    const getData = async () => {
      setUserData(await handleGetUser(user._id));
    };
    getData();
  }, [handleGetUser, navigate]);

  if (error) return <Error errorMessage={error} />;
  if (isLoading) return <Spinner />;
  if (userData) {
    return (
      <Box sx={{ marginTop: 10 }}>
        <Avatar
          src={userData.image.url}
          alt={userData.image.alt}
          sx={{ width: 150, height: 150, margin: "auto", marginBottom: 4 }}
        />
        <TableContainer sx={{ maxHeight: 400, overflowY: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Full Name:</Typography>
                  <Typography>
                    {userData.name.first} {userData.name.middle}{" "}
                    {userData.name.last}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">userID:</Typography>
                  <Typography>{userData._id}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Email:</Typography>
                  <Typography>{userData.email}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Phone:</Typography>
                  <Typography>{userData.phone}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Address:</Typography>
                  <Typography>
                    {userData.address.street} {userData.address.houseNumber},{" "}
                    {userData.address.city}, {userData.address.country}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return null;
}
