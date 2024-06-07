import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from '@mui/icons-material/Star';
import PageHeader from "../components/PageHeader";
 
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<Container sx={{mt:15}}>   
   <PageHeader
        title="About Us"
        subtitle="Learn more about our mission, vision, and team"
      />

      <Box my={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" align="center">
            Our mission is to provide all gaming enthusiasts with the information they need, purchasing gaming products, watching gamers' streams, viewing other gamers' cards, participating in tournaments, new content, and more.
          </Typography>
        </Paper>
      </Box>
      <Grid container spacing={3} justifyContent="space-between" alignItems="center" mb={4}>
  <Grid item xs={12} sm={6}>
    <Box p={3}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1">
          Our story began in 2016 when the three of us were still students, and we had to collaborate on a project together. That's when the idea of launching the world's largest gaming cards website came up. Today, our company employs around 10,000 employees in New York and Tel Aviv, and we plan to open another office in the United Arab Emirates in 2027.
        </Typography>
      </Paper>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Box p={3}>
      <Paper sx={{ p: 3 }}>
        <img src="assets/images/ourstory.jpg" alt="Our Story" style={{ width: "100%" }} />
      </Paper>
    </Box>
  </Grid>
</Grid>


      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
        
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                position: 'relative',
                '&:hover': {
                  filter: 'blur(2px) grayscale(100%)',
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  '& .github-icon': {
                    visibility: 'visible',
                  },
                },
              }}
            >
              <img
                src="assets/images/team3.jpg"
                alt="Member 1"
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <Typography variant="subtitle1">John Doe</Typography>
              <a
                href="https://github.com/JohnDoe"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  textDecoration: 'none',
                }}
              >
                <GitHubIcon className="github-icon" sx={{ visibility: 'hidden' }} />
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                position: 'relative',
                '&:hover': {
                  filter: 'blur(2px) grayscale(100%)',
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  '& .github-icon': {
                    visibility: 'visible',
                  },
                },
              }}
            >
              <img
                src="assets/images/team2.jpg"
                alt="Member 2"
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <Typography variant="subtitle1">Jane Smith</Typography>
              <a
                href="https://github.com/JaneSmith"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  textDecoration: 'none',
                }}
              >
                <GitHubIcon className="github-icon" sx={{ visibility: 'hidden' }} />
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: 'center',
                position: 'relative',
                '&:hover': {
                  filter: 'blur(2px) grayscale(100%)',
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  '& .github-icon': {
                    visibility: 'visible',
                  },
                },
              }}
            >
              <img
                src="assets/images/team1.jpg"
                alt="Member 3"
                style={{ width: '100%', borderRadius: '50%' }}
              />
              <Typography variant="subtitle1">David Brown</Typography>
             
              <a
                href="https://github.com/DavidBrown"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  textDecoration: 'none',
                }}
              >
                <GitHubIcon className="github-icon" sx={{ visibility: 'hidden' }} />
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box my={4}>
  <Typography variant="h4" gutterBottom align="center">
    User Feedback
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={4}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <Typography variant="subtitle1">"The best gaming platform I've ever used!"</Typography>
        <Typography variant="body2">- Sarah Johnson, Casual gamer</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <Typography variant="subtitle1">"Amazing selection of games and excellent customer service!"</Typography>
        <Typography variant="body2">- Michael Smith, Hardcore gamer</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <StarIcon style={{ color: 'purple' }} />
        <Typography variant="subtitle1">"I've never had so much fun gaming until I found this platform!"</Typography>
        <Typography variant="body2">- Emily Brown, Streamer</Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>
    </Container>
  );
};

export default AboutPage;
