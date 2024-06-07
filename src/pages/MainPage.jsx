import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Container, Typography, Box, CardActions, CardActionArea, IconButton, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import ROUTES from "../routes/routesModel";
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactForm from "../forms/components/ContactForm";

export default function MainPage() {

  const navigate = useNavigate();

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  const imageLinks = {
    "spiderman.jpg": "https://www.playstation.com/en-il/games/marvels-spider-man-2/",
    "naruto.jpg": "https://www.playstation.com/en-il/games/naruto-x-boruto-ultimate-ninja-storm-connections/",
    "forza.jpg": "https://forza.net/",
    "warzone.jpg": "https://www.callofduty.com/warzone"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{mt:15}}>
      <PageHeader
        title="The Gaming Web"
        subtitle="Good luck to start your journey with us"
      />
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2} marginLeft={3}>
        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea 
            onClick={() => navigate(ROUTES.SIGNUP)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/gaimers.jpg"
              alt="placeholder image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Roboto, sans-serif">
                Not Logged In Yet?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '50px' }} fontFamily="Roboto, sans-serif">
                Click on the card and Sign up now and join the largest gaming card network. Create your own personal card!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea  onClick={() => navigate(ROUTES.ABOUT)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/workers.jpg"
              alt="placeholder image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Roboto, sans-serif">
                Get to Know Us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '50px' }} fontFamily="Roboto, sans-serif">
                It all started in 2006 when we wanted to give our users the best gaming experience in the world. Click here to get to know us better.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea onClick={() => navigate(ROUTES.LOGIN)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/streamer.jpg"
              alt="placeholder image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily="Roboto, sans-serif">
                The Biggest Streamer in the World
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Roboto, sans-serif">
                Our streaming network is one of the strongest. We do a new gaming stream every 5 hours. Additionally, we have a YouTube channel with new content and a diverse Instagram page, login to connect.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'center' }}>
            <IconButton onClick={() => handleCardClick('https://www.instagram.com/gamerebels/')}>
              <InstagramIcon />
            </IconButton>
            <IconButton onClick={() => handleCardClick('https://www.youtube.com/@Avxry')}>
              <YouTubeIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      <Box mt={4} mb={8} >
        <Typography variant="h4" component="h2" align="center" mb={2}  color={"white"}>
          Our recommended ones
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["spiderman.jpg", "naruto.jpg", "forza.jpg", "warzone.jpg"].map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                component="a"
                href={imageLinks[image]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: '100%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '& img': {
                    transition: 'filter 0.3s, transform 0.3s',
                    '&:hover': {
                      filter: 'blur(2px) grayscale(100%)',
                      transform: 'scale(1.05)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <Box
                  component="img"
                  src={`/assets/images/${image}`}
                  alt={image.split('.')[0]}
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={4} mb={10} ml={3}>
        <Typography variant="h4" component="h2" align="center" mb={2} color="white">
          Featured Media
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => navigate(ROUTES.SIGNUP)}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/assets/images/hunterbird.jpg"
                  alt="Media 1"
                  sx={{ width: '100%' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Avatar for Sale
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Login and get avatar for free
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => navigate(ROUTES.SIGNUP)}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/assets/images/skywalker.jpg"
                  alt="Media 2"
                  sx={{ width: '100%' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Avatar Giveaway
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Login and get avatar for free
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => navigate(ROUTES.SIGNUP)}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/assets/images/zombie.jpg"
                  alt="Media 3"
                  sx={{ width: '100%' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The Ultimate Zombie
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Login and get avatar for free
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 4, bgcolor: 'background.default' }}>
  <ContactForm />
</Box>

    </Container>
  );
}
