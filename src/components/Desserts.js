import React from "react";
import Card from './Card';
function Desserts(){
    const cardsData = [
        {
            id: 1,
            image: 'https://i.ndtvimg.com/i/2015-09/apple-pie-ice-cream-625_625x350_81443595158.jpg', 
            name: ' Apple Pie',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://i.ndtvimg.com/i/2015-09/lemon-tart-625_625x350_61443595187.jpg',
            name: 'Lemon Tart',
            cost: '25',
        },
        {
            id: 3,
            image: 'https://i.ndtvimg.com/i/2015-09/chocolate-brownies-625_625x350_81443599634.jpg',
            name: 'Fudgy Chewy Brownies',
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
    )
}
export default Desserts;