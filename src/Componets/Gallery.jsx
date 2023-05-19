import React from 'react';

const Gallery = ({toy}) => {
    const {photo} = toy;
    return (
        <div>
            <div>
                <img src={toy.photo} alt="" />
            </div>
        </div>
    );
};

export default Gallery;