import React from 'react'
import Search from './Search'
import backgroundImage from '../img/background_1920.jpg'
import { Container, Typography, withStyles, makeStyles }
    from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        placeItems: 'center',
        backgroundImage: `linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    },
    blockContainer: {
        flexDirection: 'column',
        margin: '-8rem auto 0 auto',
        padding: '0 10%',
    },
});
const WhiteHeading = withStyles({
    root: {
        color: "#ffffff",
        fontWeight: '400'
    }
})(Typography);

const HomePage = ({ onSubmit, amount, setAmount, isSafesearch, setIsSafesearch, imageType, setImageType, photoOrientation, setPhotoOrientation }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} disableGutters maxWidth={false}>
            <Container className={classes.blockContainer}>
                <WhiteHeading variant="h2" noWrap gutterBottom align="left">
                    Images search app
                </WhiteHeading >
                <Search onSubmit={onSubmit} amount={amount} setAmount={setAmount} isSafesearch={isSafesearch}
                    setIsSafesearch={setIsSafesearch} imageType={imageType} setImageType={setImageType}
                    photoOrientation={photoOrientation} setPhotoOrientation={setPhotoOrientation} />
            </Container >
        </Container>
    )
}

export default HomePage
