import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './imageCard.css'

export default class Imagecard extends Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0, open: false }
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    renderName = () => {
        const { name } = this.props.image.user
        return name ? name : null
    }
    renderLocation = () => {
        const { location } = this.props.image.user
        return location ? location : null
    }
    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    onClick={this.handleOpen}
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular}
                />
                <Modal
                    className="modal"
                    aria-labelledby="image-popup"
                    aria-describedby="simple-image-popup"
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 600,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className="modal-wrapper">
                            <img className="modal-img"
                                ref={this.imageRef}
                                alt={alt_description}
                                src={urls.regular}
                            />
                            <p className="modal-description">
                                <span className="modal-description_name">{this.renderName()}</span>
                                <span className="modal-description_location">{this.renderLocation()}</span>
                            </p>
                        </div>
                    </Fade>
                </Modal>
            </div >
        )
    }
}
