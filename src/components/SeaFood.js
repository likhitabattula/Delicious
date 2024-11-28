import React from "react";
import Card from './Card';


function SeaFood(){
    const cardsData = [
        {
            id: 1,
            image: 'https://i.ndtvimg.com/i/2016-03/calamari-fried-625_625x350_71457506458.jpg', 
            name: 'Calamari Fritters',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://i.ndtvimg.com/i/2016-03/goan-crab-curry-625_625x350_61457506533.jpg',
            name: 'Goan Crab Curry',
            cost: '25',
        },
        {
            id: 3,
            image: 'https://i.ndtvimg.com/i/2016-03/prawn-sesame-toast-625_625x350_71457506372.jpg',
            name: 'Prawn Sesame Toast',
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
       
    
export default SeaFood;