import React, { useState } from 'react'
import { useHistory } from "react-router";
import SearchBar from "material-ui-search-bar";

const Search = ({ onSubmit }) => {
    const history = useHistory();
    const [input, setInput] = useState('')

    const styles = {
        searchContainer: {
            width: '100%'
        }
    }

    const onFormSubmit = event => {
        event.preventDefault()
        if (input) {
            setTimeout(() => {
                onSubmit(input)
                history.push(`/results/${input}`)
            }, 500)
        } else if (input.length === 0) {
            alert('provide some value!')
        }
    }

    return (
        <div style={styles.searchContainer}>
            <form onSubmit={onFormSubmit} className='form'>
                <SearchBar placeholder="Search free high-resolution photos"
                    value={input}
                    onChange={event => setInput(event)}
                    cancelOnEscape={true}
                />
            </form>
        </div>
    )
}

export default Search
