import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Footer from './components/Footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: theme.palette.background.paper,
    //backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: 'transparent',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    color: "#3f51b5",
    paddingTop: '65%', // 16:9
    opacity: .85,

    "&:hover": {
      opacity: 0.6,
    }
  },
  cardContent: {
    padding: theme.spacing(2, 0, 1),
    flexGrow: 1,
  },
  dividerMed: {
    width: "15%",
  },

}));

// TODO: improve modularity by loading data in separately
const cards = [
  {
    title: "Representable.org",
    link: "https://representable.org/",
    description: "Representable is a tool that enables people across the U.S. to draw maps of their communities for use in the redistricting process. Project supported by the Princeton Gerrymandering Project and Schmidt Futures Foundation.",
    img: "img/representable.png"
  },
  {
    title: "DreamWorld: Meditation Simulation",
    link: "https://dreamworld-426.github.io/dreamworld/",
    description: "A Node/ThreeJS-based infinite terrain simulation for focused meditation. Submitted as final project for Computer Graphics (COS 426) and received Best Overall Award and Innovation Award.",
    img: "img/dreamworld.png"

  },
  {
    title: "Ask Ava",
    link: "https://odus.princeton.edu/news/student-organization-spotlight-practical-hacking-yc-hackathon",
    description: "Y-Combinator Hackathon 2019 project. An intelligent Q&A-based podcast discovery system for Amazon Alexa. Created an Amazon Alexa app to record user questions and retrieve answers from a BERT model trained on 100+ podcast episodes. Built with React, Redux, Express, Node, and AWS Lambda.",
    img: "img/askava.png",
  },
  {
    title: "Crop Disease Prediction",
    link: "https://www.cs.princeton.edu/sites/default/files/lauren_johnston_spring_2019.pdf",
    description: "Piloted a drone over NJ farm fields to collect aerial images and infrared data and identify areas with poor crop health. Trained a CNN in Pytorch to classify crop disease from aerial images. Paper selected as an example for future students on Princeton computer science website.",
    img: "img/crop.JPG",
  },
  // 
  // {
  //   title: "Nassau Weekly",
  //   link: "http://nassauweekly.com/",
  //   description: "Redesigned the Nassau Weekly website in 2017 and overhauled non-responsive, legacy site. Integrated AdSense and generated online ad revenue to combat declining print ad sales.",
  //   img: "img/nass.png",
  // },
  // {
  //   title: "Solar Flare Detection",
  //   link: "flare_research.pdf",
  //   description: "Built a VLF monitoring station and performed data analysis in Python to investigate solar flare damage by latitude from over 100 global SID monitors. Research presented at 2015 Congress on Polar Meteorology and Oceanography.",
  //   img: "img/flares.png",
  // }
];

// Adapted from: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/album/Album.js

function FrontPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Hi, I'm Lauren &#8212; a software engineer interested in creating tech that has a tangible impact on communities. I have full-stack development experience as well as experience building data pipelines for machine learning.  
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <IconButton variant="contained" color="primary" href="https://www.linkedin.com/in/laurenjohnston9/">
                    <LinkedInIcon></LinkedInIcon>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="contained" color="primary" href="https://github.com/lauren-johnston">
                    <GitHubIcon></GitHubIcon>
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg" >
        <Typography variant="h5" color="textPrimary" gutterBottom>
                Projects
          </Typography>
          <Divider className={classes.dividerMed} light />
          <br></br>
          <Grid container spacing={4}>
            {cards.map((card,index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card className={classes.card} elevation={0} padding={2} square={true}>
                <Link href={card.link}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                  />
                  </Link>
                  <Box className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default FrontPage;