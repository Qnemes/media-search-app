import React, { useState, useEffect, Fragment } from 'react'
import './imageList.css'
import ImageCard from './ImageCard'
import Search from './Search'
import { Container, GridList, GridListTile, Typography, Skeleton } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '1rem'
    },
    loadingHeading: {
        paddingTop: '1.5rem'
    },
    errorHeading: {
        color: theme.palette.error.dark,
        paddingTop: '1.5rem'
    },
    noResultsHeading: {
        color: theme.palette.text.secondary,
        paddingTop: '1.5rem'
    }
}))

const ImageList = ({ images, onSubmit, isLoading, isError, amount, setAmount, isSafesearch, setIsSafesearch, photoOrientation, setPhotoOrientation, imageType, setImageType }) => {
    // const [fetchedImages, setFetchedImages] = useState(images)
    const classes = useStyles()
    const theme = useTheme()

    const renderImageList = () => {
        return (
            // <div className="img-wrapper">
            <GridList cols={4}>
                {images.map(image => (
                    <GridListTile key={image.id}>
                        <img
                            alt={image.tags}
                            src={image.webformatURL}
                        />
                    </GridListTile>
                    // return <ImageCard key={image.id} image={image} images={images} />
                ))}
            </GridList>
            //</div>
        )
    }
    const renderError = () => {
        return (
            <Typography className={classes.errorHeading} variant="h2" align="center">
                Something went wrong...
            </Typography >
        )
    }
    const renderLoading = () => {
        return (
            <Typography className={classes.loadingHeading} variant="h2" align="center">
                Loading...
            </Typography >
        )
    }
    const renderNoResults = () => {
        return (
            <Typography className={classes.noResultsHeading} variant="h2" align="center">
                No results were found...
            </Typography >
        )
    }
    return (
        <Container className={classes.container}>
            <Search onSubmit={onSubmit} amount={amount} setAmount={setAmount} isSafesearch
                setIsSafesearch={setIsSafesearch} imageType={imageType} setImageType={setImageType}
                photoOrientation={photoOrientation} setPhotoOrientation={setPhotoOrientation} />
            {(isError && renderError()) || (isLoading ? renderLoading() : images.length ? renderImageList() : renderNoResults())}
        </Container>
    )
}

export default ImageList
