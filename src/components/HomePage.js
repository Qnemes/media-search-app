import React from 'react'
import Search from './Search'
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../img/background_1920.jpg'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import bg_1920 from '../img/background_1920.jpg'
import bg_640 from '../img/background_640.jpg'
import bg_1399 from '../img/background_1399.jpg'
import bg_2400 from '../img/background_2400.jpg'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgrondSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    blockContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: '0 15%',
    },
});
const WhiteHeading = withStyles({
    root: {
        color: "#ffffff",
        fontWeight: '400',
        marginTop: '-15rem'
    }
})(Typography);

const HomePage = ({ onSubmit }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} disableGutters maxWidth={false}>
            <Container className={classes.blockContainer}>
                <WhiteHeading variant="h2" noWrap gutterBottom align="left">
                    Unsplash clone search app
                </WhiteHeading >
                {/* <img src={`url(${bg_1920})`}
                srcSet={`${bg_640} 640w, ${bg_1399} 1399w, ${bg_2400} 2400w`}
                >
            </img> */}
                <Search onSubmit={onSubmit} />
            </Container >
        </Container>
    )
}

export default HomePage
