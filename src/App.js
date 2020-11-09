import React, { useState, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import unsplash from './api/unsplash'
import HomePage from './components/HomePage'
import ImageList from './components/ImageList'

import './App.css';


const App = () => {
    const [images, setImages] = useState([])

    const onSearchSubmit = async input => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: input,
                per_page: 40,
            }
        });
        setImages(response.data.results);
    }
    return (
        <Fragment>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={() => <HomePage onSubmit={onSearchSubmit} />} />
                    <Route path="/results/:query" exact component={() => <ImageList images={images} onSubmit={onSearchSubmit} />} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
