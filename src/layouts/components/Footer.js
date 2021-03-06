import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        background: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

  
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://laurenejohnston.com/">
            Lauren Johnston
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
        </footer>
    );
}
export default Footer;