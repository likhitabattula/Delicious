import React from "react";
import Card from './Card';
const  Noodles = ()=> {
   
    const cardsData = [
        {
            id: 1,
            image: 'https://www.crazymasalafood.com/wp-content/images/paneer-14.jpg.webp', 
            name: 'Paneer Noodles',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://www.crazymasalafood.com/wp-content/images/veg-chowmein.jpg.webp',
            name: 'Vegetable Chowmein',
            cost: '25',
        },
        {
            id: 3,
            image: 'https://www.crazymasalafood.com/wp-content/images/chicken-16.jpg.webp',
            name: 'Chicken Chowmein',
            cost: '20',
        },
        
    ];
    return(
      <div className="card-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <a class="navbar-brand" href="#">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" class="food-munch-logo" />
            </a>   
            </nav>
      {cardsData.map((card) => (
        <Card key={card.id} id={card.id} image={card.image} name={card.name} cost={card.cost} />
      ))}
    </div>
    
    );
};
export default Noodles;