import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import MapComponent from "../components/MapComponent";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <Container>
      <Typography sx={{ m: "7px" }} variant="h4" gutterBottom>
        Card Details
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant="head">Card Title</TableCell>
              <TableCell>{card.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Phone</TableCell>
              <TableCell>{card.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Email</TableCell>
              <TableCell>{card.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Country</TableCell>
              <TableCell>{card.address.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">City</TableCell>
              <TableCell>{card.address.city}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Zip Number</TableCell>
              <TableCell>{card.address.zip}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ height: "200px" }} variant="head">Photo</TableCell>
              <TableCell>
                <img src={card.image.url} alt="Card" style={{ width: "150px", height: "150px" }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Location</TableCell>
              <TableCell>
                <MapComponent cardData={card} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
