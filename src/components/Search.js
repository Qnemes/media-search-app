import React, { useState, useRef, Fragment } from 'react'
import history from '../history'
import {
    TextField, makeStyles, Select, Checkbox, Popover, Popper, Fade, Typography, InputLabel, MenuItem, Link,
    FormControl, FormControlLabel, ClickAwayListener
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    textInput: {
        backgroundColor: 'white',
        borderRadius: '6px',
        width: '100%'
    },
    popoverText: {
        fontWeight: '500',
        padding: '.5rem',
        border: '.5px solid #e63946',
        borderRadius: 'inherit'
    },
    popper: {
        marginTop: '.25rem',
        zIndex: 10,
        backgroundColor: theme.palette.background.paper,
        padding: '.5rem 1.5rem',
        border: '1px solid black',
        borderRadius: '3px',
    },
    optionsLink: {
        marginLeft: '.25rem',
        padding: '0 .15rem',
        color: theme.palette.info.main,
        fontSize: '1.15rem'
    }
}))

const autocompleteArray = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
]

const Search = ({ onSubmit, amount, setAmount, isSafesearch, setIsSafesearch, photoOrientation, setPhotoOrientation, imageType, setImageType }) => {
    const [input, setInput] = useState('')
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const [popperAnchorEl, setPopperAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const [isPopover, setIsPopover] = useState(null);

    const classes = useStyles();
    const inputRef = useRef();

    // const handleClickAway = () => {
    //     setOpen(false);
    // };

    const handleTogglePopper = event => {
        setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget)
        setOpen(prev => !prev);
    }
    // const handleTogglePopover = () => {
    //     setPopoverAnchorEl(inputRef.current);
    // }
    // const handleClosePopover = () => {
    //     setPopoverAnchorEl(null);
    // }

    const popoverIsOpen = Boolean(popoverAnchorEl);
    const popperIsOpen = Boolean(popperAnchorEl);

    const popoverId = popoverIsOpen ? 'simple-popover' : undefined;
    const popperId = popperIsOpen ? 'options-popper' : undefined;

    const onFormSubmit = async event => {
        event.preventDefault();
        if (input) {
            await onSubmit(input)
            history.push(`/images/${input}`)
        } else if (!input.length) {
            setPopoverAnchorEl(inputRef.current);
            setIsPopover(true)
        }
    }

    return (
        <Fragment>
            <form ref={inputRef} onSubmit={onFormSubmit}>
                {/* <Autocomplete
                freeSolo
                autoSelect
                clearOnEscape
                disablePortal
                id="free-solo-demo"
                loadingText="Loading.."
                options={autocompleteArray.map(option => option.title)}
                renderInput={params => ( */}
                <TextField placeholder="Search free high-resolution photos"
                    // {...params}
                    autoFocus
                    error={isPopover}
                    className={classes.textInput}
                    margin="normal"
                    variant="outlined"
                    value={input}
                    onChange={event => { setInput(event.target.value) }}
                // InputProps={{ ...params.InputProps, type: 'text' }}
                />
                {/* )} */}
                {/* /> */}
                <Popover
                    id={popoverId}
                    open={popoverIsOpen}
                    anchorEl={popoverAnchorEl}
                    onClose={() => {
                        setPopoverAnchorEl(null);
                        setIsPopover(false)
                    }}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                >
                    <Typography className={classes.popoverText}>Please, provide some value</Typography>
                </Popover>
                <Link
                    className={classes.optionsLink}
                    aria-label="images search options"
                    aria-describedby={popperId}
                    component="button"
                    type="button"
                    variant="body2"
                    onClick={handleTogglePopper}
                >
                    Options...
                </Link>
                <Popper id={popperId} open={popperIsOpen} anchorEl={popperAnchorEl} transition
                    placement="bottom-start" className={classes.popper}
                >
                    {({ TransitionProps }) => (
                        <ClickAwayListener onClickAway={() => setOpen(false)}>
                            <Fade {...TransitionProps}>
                                <div>
                                    <FormControl>
                                        <InputLabel id="select-label">Image Amount</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select-amount"
                                            value={amount}
                                            onChange={(event) => setAmount(event.target.value)}
                                        >
                                            <MenuItem value={20}>25</MenuItem>
                                            <MenuItem value={50}>50</MenuItem>
                                            <MenuItem value={75}>75</MenuItem>
                                            <MenuItem value={100}>100</MenuItem>
                                            <MenuItem value={200}>200</MenuItem>
                                        </Select>
                                        <FormControlLabel
                                            control={<Checkbox checked={isSafesearch} onChange={() => setIsSafesearch(!isSafesearch)} name="safesearch" />}
                                            label="Safesearch"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel id="select-label">Photo Orientation</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="select-orientation"
                                            value={photoOrientation}
                                            onChange={() => setPhotoOrientation}
                                        >
                                            <MenuItem value={'all'}>All</MenuItem>
                                            <MenuItem value={'horizontal'}>Horizontal</MenuItem>
                                            <MenuItem value={'vertical'}>Vertical</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Fade>
                        </ClickAwayListener>
                    )}
                </Popper>
            </form>
        </Fragment >
    )
}

export default Search
