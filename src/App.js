import React, { useState, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import HomePage from './components/HomePage'
import ImageList from './components/ImageList'
import useFetch from './hooks/useFetch';

import './App.css';

require('dotenv').config()

const App = () => {
    const [amount, setAmount] = useState(5)
    const [isSafesearch, setIsSafesearch] = useState(true)
    const [photoOrientation, setPhotoOrientation] = useState('all')
    const [imageType, setImageType] = useState('all')
    const [{ response, isLoading, isError }, doFetch] = useFetch(
        "",
        { hits: [] }
    )

    const onSearchSubmit = input => {
        // doFetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&per_page=${amount}&safesearch=${isSafesearch}&orientation=${photoOrientation}&image_type=${imageType}&q=${input}`)
        doFetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${input}`)
    }
    // console.log(amount);
    // console.log(photoOrientation);
    // console.log(isSafesearch);
    // console.log(response.hits);


    // const onUnsplashSearchSubmit = async input => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: {
    //             query: input,
    //             per_page: amount,
    //         }
    //     });
    //     setImages(response.data.results);
    // }
    // const onPixabaySearchSubmit = async input => {
    //     const response = await pixabay.get('/api', {
    //         params: {
    //              q: input,
    //              safesearch:true,
    //              per_page: amount
    //         }
    //     });
    //     setImages(response.data.hits);
    // }
    return (
        <Fragment>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={() => <HomePage
                        onSubmit={onSearchSubmit}
                        isSafesearch
                        setIsSafesearch={setIsSafesearch}
                        amount={amount}
                        setAmount={setAmount}
                        photoOrientation={photoOrientation}
                        setPhotoOrientation={setPhotoOrientation}
                        imageType={imageType}
                        setImageType={setImageType} />}
                    />
                    <Route path="/images/:query" exact component={() => <ImageList
                        onSubmit={onSearchSubmit}
                        images={response.hits}
                        isLoading={isLoading}
                        isError={isError}
                        isSafesearch
                        setIsSafesearch={setIsSafesearch}
                        amount={amount}
                        setAmount={setAmount}
                        photoOrientation={photoOrientation}
                        setPhotoOrientation={setPhotoOrientation}
                        imageType={imageType}
                        setImageType={setImageType} />}
                    />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
