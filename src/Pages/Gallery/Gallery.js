import React from 'react';
const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__wrapper">
                    <div className="gallery__box-1">
                        <img className="gallery__image" src={require('../../Assets/img/1.jpg')} alt="img" />
                    </div>
                    <div className="gallery__box-2">
                        <img className="gallery__image" src={require('../../Assets/img/2.jpg')} alt="img" />
                    </div>
                    <div className="gallery__box-3">
                        <img className="gallery__image" src={require('../../Assets/img/3.jpg')} alt="img" />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Gallery;
