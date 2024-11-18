
// src/Nonveg.js
import React from 'react';
import Card from './Card';

const Nonveg = () => {
    const cardsData = [
        {
            id: 1,
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/lamb-curry-1024x1536.webp', // Replace with your image URLs
            name: ' Lamb Chicken Curry',
            cost: '$12',
        },
        {
            id: 2,
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/mutton-korma-lamb-korma-1024x1536.webp',
            name: 'Mutton Korma | Lamb Korma',
            cost: '$25',
        },
        {
            id: 3,
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-swasthi-1024x1536.webp',
            name: 'Chicken 65 Recipe',
            cost: '$20',
        },
        
    ];

    return (
        <div className="card-container">
            {cardsData.map((card) => (
                <Card key={card.id} image={card.image} name={card.name} cost={card.cost} />
            ))}
        </div>
    );
};

export default Nonveg;
