import React from 'react'
import "./Gallery.css";

export const Gallery = () => {
    // Array of image paths
    const images = Array.from({ length: 20 }, (_, index) => `/images/gallery/img${index + 1}.jpg`);
    return (
        <div className='container'>
            <div className='image-container'>

                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
