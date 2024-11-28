import React from "react";
import Card from './Card';
function Soups(){
    const cardsData = [
        {
            id: 1,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2022/03/creamy-tomato-soup-2.jpg', 
            name: 'Indian Tomato Soup (Instant Pot)',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2021/12/Palak-soup-1.jpg',
            name: 'Spinach Soup (Palak Soup)',
            cost: '25',
        },
        {
            id: 3,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2016/12/celery-soup-recipe-9.jpg',
            name: 'Celery soup recipe',
            cost: '25',
        },
        {
            id: 4,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2023/11/curried-pumpkin-soup-1.jpg',
            name: 'Thai Curried Pumpkin Soup',
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
export default Soups;