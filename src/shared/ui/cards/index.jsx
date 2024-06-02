import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// Import your SVG icons
import favoritesIcon from '@/shared/assets/icons/favorites.svg';
import eyeIcon from '@/shared/assets/icons/eye.svg';
import starIcon from '@/shared/assets/icons/star.svg';
import activeStarIcon from '@/shared/assets/icons/active-star.svg';
import semiActiveStarIcon from '@/shared/assets/icons/semi-active-star.svg';
import Button from "@/shared/ui/button/index.jsx";

const Cards = ({ cards }) => {
    const getStarIcon = (rating, starIndex) => {
        if (starIndex <= Math.floor(rating)) {
            return activeStarIcon; // Full star
        } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
            return semiActiveStarIcon; // Half star
        } else {
            return starIcon; // Inactive star
        }
    };

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <div className="card-image-container">
                        <div className="card-icons">
                            <div className="icon-container">
                                <img className="cursor-pointer" src={favoritesIcon} alt="favorites" />
                            </div>
                            <div className="icon-container">
                                <Link to={`/all/product/${card.id}`}>
                                    <img className="cursor-pointer" src={eyeIcon} alt="view" />
                                </Link>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src={card.img} alt={card.name} />
                        </div>
                        <div className="card-button">
                            <Button type="primary" size="lg" fullWidth>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                    <div className="card-name">{card.name}</div>
                    {card.discount ? (
                        <div className="card-prices">
                            <span className="card-price-discount">${card.price}</span>
                            <span className="card-price-original">${card.originalPrice}</span>
                        </div>
                    ) : (
                        <div className="card-price">${card.price}</div>
                    )}
                    <div className="card-rating">
                        {[...Array(5)].map((_, starIndex) => (
                            <img alt={'stars'} key={starIndex} src={getStarIcon(card.rating, starIndex + 1)} />
                        ))}
                        <div className="card-reviews">({card.count})</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
