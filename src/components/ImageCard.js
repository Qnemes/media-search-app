import React, { Component, createRef, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { Modal, Backdrop, Fade, Button, GridList, GridListTile } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './imageCard.css'

const ImageCard = ({ image, images }) => {
    const imageRef = useRef()
    const handleOpen = () => {

    }
    const renderImage = () => {
        let imageDescription, imageUrl
        if (image.alt_description && image.urls) {
            ({ alt_description: imageDescription } = image);
            ({ regular: imageUrl } = image.urls);
        }
        if (image.tags && image.webformatURL) {
            ({ tags: imageDescription, webformatURL: imageUrl } = image);
        }
        return (
            <GridListTile key={image.id}>
                <img
                    // onClick={handleOpen}
                    ref={imageRef}
                    alt={imageDescription}
                    src={imageUrl}
                />
            </GridListTile>
        )
    }
    return (
        renderImage()
    )
}

export default ImageCard

// export default class Imagecard extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { spans: 0, open: false, images: this.props.images }
//         this.imageRef = createRef()
//         this.divRef = createRef()
//     }
//     componentDidMount() {
//         this.imageRef.current.addEventListener('load', this.setSpans)
//     }
//     setSpans = () => {
//         const height = this.imageRef.current.clientHeight
//         const spans = Math.ceil(height / 10)
//         this.setState({ spans })
//     }
//     handleOpen = () => {
//         this.setState({ open: true });
//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };

//     deleteImage = (e) => {
//         e.stopPropagation();
//         this.divRef.current.remove()
//         this.handleClose()
//     }

//     renderName = () => {
//         const { name } = this.props.image.user
//         return name ? name : null
//     }
//     renderLocation = () => {
//         const { location } = this.props.image.user
//         return location ? location : null
//     }
//     render() {
//         let imageDescription, imageUrl
//         if (this.props.image.alt_description && this.props.image.urls) {
//             ({ alt_description: imageDescription } = this.props.image);
//             ({ regular: imageUrl } = this.props.image.urls);
//         }
//         if (this.props.image.tags && this.props.image.webformatURL) {
//             ({ tags: imageDescription, webformatURL: imageUrl } = this.props.image);
//         }
//         return (
//             <div ref={this.divRef} style={{ gridRowEnd: `span ${this.state.spans}` }}>
//                 <img
//                     onClick={this.handleOpen}
//                     ref={this.imageRef}
//                     alt={imageDescription}
//                     src={imageUrl}
//                 />
//                 <Modal
//                     className="modal"
//                     aria-labelledby="image-popup"
//                     aria-describedby="simple-image-popup"
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     closeAfterTransition
//                     BackdropComponent={Backdrop}
//                     BackdropProps={{
//                         timeout: 600,
//                     }}
//                 >
//                     <Fade in={this.state.open}>
//                         <div className="modal-wrapper">
//                             <img className="modal-img"
//                                 ref={this.imageRef}
//                                 alt={imageDescription}
//                                 src={imageUrl}
//                             />
//                             <p className="modal-description">
//                                 <span className="modal-description_name">{this.renderName()}</span>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     startIcon={<DeleteIcon />}
//                                     onClick={e => {
//                                         this.deleteImage(e)
//                                     }}
//                                 >
//                                     Delete
//                                 </Button>
//                                 <span className="modal-description_location">{this.renderLocation()}</span>
//                             </p>
//                         </div>
//                     </Fade>
//                 </Modal>
//             </div >
//         )
//     }
// }
