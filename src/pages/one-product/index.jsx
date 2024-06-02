import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainHeader from "@/widgets/app-header/index.jsx";
import CardDetail from "@/shared/ui/card-details/index.jsx";

const CardDetailPage = () => {
    const { id } = useParams();
    const [cardItems, setCardItems] = useState([]);

    const fetchCardItems = async (id) => {
        try {
            const response = await axios.get("/data/card.json");
            const jsonData = response.data;

            if (typeof id === "string") {
                return jsonData.filter((item) => item.id === parseInt(id));
            } else if (Array.isArray(id)) {
                return jsonData.filter((item) => id.includes(item.id.toString()));
            }
        } catch (error) {
            console.error("Error fetching card items data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const items = await fetchCardItems(id);
            setCardItems(items);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <MainHeader/>
            <div className="mt-32">
                <CardDetail cards={cardItems} />
            </div>
        </div>

    );
};

export default CardDetailPage;
