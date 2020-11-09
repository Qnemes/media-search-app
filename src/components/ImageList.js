import React from 'react'
import './imageList.css'
import ImageCard from './ImageCard'
import Search from './Search'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    errorHeading: {
        paddingTop: '1.5rem'
    }
})

const ImageList = ({ images, onSubmit }) => {
    const classes = useStyles()
    const styles = {
        container: {
            paddingTop: '1rem'
        }
    }
    const renderImageList = () => {
        return (
            <div className="img-wrapper">
                {images.map((image) => {
                    return <ImageCard key={image.id} image={image} />
                })}
            </div>
        )
    }
    const renderError = () => {
        return (
            <Typography className={classes.errorHeading} variant="h2" align="center">
                No results were found
            </Typography >
        )
    }
    return (
        <Container style={styles.container}>
            <Search onSubmit={onSubmit} />
            {images.length ? renderImageList() : renderError()}
        </Container>
    )
}

export default ImageList
