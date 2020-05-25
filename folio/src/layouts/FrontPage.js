import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    color: "white",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  dividerMed: {
    width: "30%",
    margin: "auto",
  },

}));

const cards = [1, 2, 3, 4];

// Adapted from: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/album/Album.js

function FrontPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Lauren Johnston
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            I'm a software engineer interested in creating tech that has a tangible impact on communities. I have full-stack development experience as well as experience building and optimizing data pipelines and ML (Pytorch + Tensorflow) model training.  
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
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                Projects
          </Typography>
          <Divider className={classes.dividerMed} light />
          <br></br>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
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