import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveEllipse from '@/shared/assets/icons/active-ellipse.svg';
import Ellipse from '@/shared/assets/icons/ellipse.svg';

const Carousel = ({ carousel }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = (name) => {
        const index = findIndexByName(name);
        if (index !== -1) {
            setCurrentImageIndex(index);
        }
    };

    const getEllipseName = (index) => {
        return currentImageIndex === index ? ActiveEllipse : Ellipse;
    };

    const findIndexByName = (name) => {
        return carousel.findIndex((item) => item.name === name);
    };

    const currentSlide = carousel[currentImageIndex];

    return (
        <div className="w-[892px] h-[344px] bg-black rounded text-white flex justify-between items-center relative">
            <div className="flex flex-col ml-24">
                <div className="flex items-center gap-3">
                    <div className="font-poppins text-base">{currentSlide?.name}</div>
                </div>
                <div className="font-inter text-5xl mt-4 font-semibold leading-tight">
                    {currentSlide?.description}
                </div>
                <div className="mt-4 text-base font-poppins">
                    <Link to={currentSlide?.link} className="text-white hover:text-gray-400">
                        Shop Now
                    </Link>
                </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-3 cursor-pointer">
                {carousel.map((slide, index) => (
                    <img
                        key={index}
                        src={getEllipseName(index)}
                        alt="carousel-ellipse"
                        onClick={() => changeImage(slide.name)}
                        className={`cursor-pointer ${
                            currentImageIndex === index ? 'active-ellipse' : 'ellipse'
                        }`}
                    />
                ))}
            </div>
            <img src={currentSlide?.img} alt="carousel-slide"/>
        </div>
    );
};

export default Carousel;
