import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from "@/shared/ui/cards/index.jsx";
import MainHeader from "@/widgets/app-header/index.jsx";
import AppNav from "@/widgets/app-nav/index.jsx";
import Carousel from "@/shared/ui/carousel/index.jsx";

const Home = () => {
    const [items, setItems] = useState([]);
    const [cardItems, setCardItems] = useState([]);
    const limit = 4; // Set the number of items to display

    const fetchCarousel = async () => {
        try {
            const response = await axios.get('/data/carousel.json');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching carousel data:', error);
        }
    };

    const fetchCardItems = async () => {
        try {
            const response = await axios.get('/data/card.json');
            setCardItems(response.data);
        } catch (error) {
            console.error('Error fetching card items data:', error);
        }
    };

    useEffect(() => {
        fetchCarousel();
        fetchCardItems();
    }, []);

    const limitedCardItems = cardItems.slice(0, limit);

    return (
        <div >
            <MainHeader/>
            <div className="flex flex-col mt-14 gap-24">
                <div className="flex gap-24">
                    <AppNav />
                    <Carousel carousel={items}/>
                </div>
                <div className="mt-14 flex flex-col gap-y-8">
                    <div className="relative font-poppins font-semibold text-base before:content-[''] before:w-[20px] before:h-[40px] before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
                        Today's
                    </div>
                    <Cards cards={limitedCardItems} />
                </div>
            </div>
        </div>

    );
};

export default Home;
