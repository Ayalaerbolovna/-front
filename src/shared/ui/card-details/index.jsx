import { useState } from 'react';
import Button from '@/shared/ui/button';
import './index.scss'
import activeStarIcon from "@/shared/assets/icons/active-star.svg";
import semiActiveStarIcon from "@/shared/assets/icons/semi-active-star.svg";
import starIcon from "@/shared/assets/icons/star.svg";
import delivery from "@/shared/assets/icons/delivery.svg"
import favorite from "@/shared/assets/icons/favorites.svg"
import returnIcon from '@/shared/assets/icons/return.svg'

const CardDetail = ({ cards }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('XS');

    const getStarIcon = (rating, starIndex) => {
        if (starIndex <= Math.floor(rating)) {
            return activeStarIcon; // Full star
        } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
            return semiActiveStarIcon; // Half star
        } else {
            return starIcon; // Inactive star
        }
    };

    const selectSize = (selectedSize) => {
        setSize(selectedSize);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculatedPrice = (card) => {
        return (card.price * quantity).toFixed(2);
    };


    return (
        <div>
            {cards.map((card) => (
                <div key={card.id} className="flex justify-center">
                    <div className="w-[500px] h-[600px] bg-[#F5F5F5] flex justify-center items-center">
                        <img className='w-[500px] h-[600px]' src={card.img} alt={card.name} />
                    </div>
                    <div className="w-[600px] mx-auto">
                        <div className="font-inter text-2xl font-semibold">{card.name}</div>
                        <div className="flex gap-1 mt-2 items-center">
                            {[...Array(5)].map((_, starIndex) => (
                                <img
                                    key={starIndex}
                                    src={getStarIcon(card.rating, starIndex + 1)}
                                    alt="stars"
                                />
                            ))}
                            <div className="flex items-center gap-3">
                                <div className="font-poppins text-xs text-gray-500 ml-2 mt-1">({card.count} Reviews)</div>
                                <div>|</div>
                                <div className="text-[#00FF66] font-poppins text-sm">In Stock</div>
                            </div>
                        </div>
                        <div className="font-poppins text-xl mt-4">${calculatedPrice(card)}</div>
                        <div className="my-4 font-poppins">{card.description}</div>
                        <hr />
                        <div className="flex gap-4 mt-6">
                            <div>Size:</div>
                            <div className="flex gap-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((sizeOption) => (
                                    <button
                                        key={sizeOption}
                                        className={`size-btn ${size === sizeOption ? 'bg-red-500 text-white' : ''}`}
                                        onClick={() => selectSize(sizeOption)}
                                    >
                                        {sizeOption}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex mt-4 border rounded w-[159px]">
                                <button className="w-[41px] h-[44px] flex justify-center items-center" onClick={decreaseQuantity}>
                                    <span>-</span>
                                </button>
                                <input type="number" className="quantity-input w-[80px] h-[44px] text-[#000000] border-l border-r-0" value={quantity} readOnly />
                                <button className="w-[41px] h-[44px] bg-red-600 flex justify-center items-center" onClick={increaseQuantity}>
                                    <span>+</span>
                                </button>
                            </div>
                            <div className="mt-4">
                                <Button type="secondary" size="lg">Buy now</Button>
                            </div>
                            <div className="w-[40px] h-[40px] border flex justify-center items-center mt-4">
                                <img
                                    className="cursor-pointer"
                                    src={favorite}
                                    alt="favorites"
                                />
                            </div>
                        </div>
                        <div className="w-[399px] h-[180px] border rounded mt-8 flex flex-col justify-between">
                            <div className="flex gap-3 p-4 items-center h-[90px]">
                                <div>
                                    <img src={delivery} alt="delivery" />
                                </div>
                                <div>
                                    <div className="font-poppins text-base font-medium">Free delivery</div>
                                    <div className="font-poppins text-xs font-medium underline">Enter your postal code for Delivery Availability</div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex gap-3 p-4 items-center h-[90px]">
                                <div>
                                    <img src={returnIcon} alt="return" />
                                </div>
                                <div>
                                    <div className="font-poppins text-base font-medium">Return Delivery</div>
                                    <div className="font-poppins text-xs font-medium underline">Free 30 Days Delivery Returns.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardDetail;
