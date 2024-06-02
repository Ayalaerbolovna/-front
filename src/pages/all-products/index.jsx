import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '@/shared/ui/cards/index.jsx';
import MainHeader from "@/widgets/app-header/index.jsx";

const CardList = () => {
    const [cardItems, setCardItems] = useState([]);

    useEffect(() => {
        const fetchCardItems = async () => {
            try {
                const response = await axios.get('/data/card.json');
                setCardItems(response.data);
            } catch (error) {
                console.error('Error fetching card items data:', error);
            }
        };

        fetchCardItems();
    }, []);

    return (
        <div>
            <MainHeader/>
            <div className="mt-14 flex flex-col gap-y-8">
                <div className="relative font-poppins font-semibold text-base before:content-[''] before:w-[20px] before:h-[40px] before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
                    All Products
                </div>
                <Cards cards={cardItems} />
            </div>
        </div>

    );
};

export default CardList;
