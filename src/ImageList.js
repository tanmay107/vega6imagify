import React from 'react';
import Image from './Image';
import './ImageList.css';

const ImageList = ({ images }) => {
    return ( 
        <div className="image-list">
            { 
                images.map((i) => {
                    console.log(i.webformatURL);
                    return(
                        <Image
                            previewURL = {i.previewURL}
                            webformatURL = {i.webformatURL}
                        />
                    );
                })
            }
        </div>
    )
}

export default ImageList;
