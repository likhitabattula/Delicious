import React from 'react';
import Card from './Card';



const Veg = () => {
    
        const cardsData = [
            {
                id: 1,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2015/07/papdi-chaat-1.jpg',
                name: 'Papdi Chaat (Dahi Papri Chaat)',
                cost: '12',
            },
            {
                id: 2,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2020/09/sabudana-tikki-1.jpg',
                name: 'Sabudana Tikki',
                cost: '25',
            },
            {
                id: 3,
                image: 'https://www.spiceupthecurry.com/wp-content/uploads/2021/09/dahi-vada-2.jpg',
                name: 'Dahi vada',
                cost: '20',
            },
            {
                id: 4,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2020/11/methi-muthia-recipe-1.jpg' , 
                name: 'Methi Muthia (Steamed, Fried, Air-Fryer)',
                cost: '12',
            },
            {
                id: 5,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2020/09/paneer-tikka-recipe-2.jpg' ,
                name: 'Paneer Tikka (Oven & Stovetop)',
                cost: '25',
            },
            {
                id: 6,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2020/09/sweet-potato-tikki-2.jpg' ,
                name: 'Sweet Potato Tikki',
                cost: '20',
            },
            {
                id: 7,
                image: 'https://www.spiceupthecurry.com/wp-content/uploads/2022/04/bang-bang-cauliflower-1.jpg', 
                name: 'Bang Bang Cauliflower (Air Fryer)',
                cost: '12',
            },
            {
                id: 8,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2022/05/batata-vada-2.jpg' ,
                name: 'Batata Vada',
                cost: '25',
            },
            {
                id: 9,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2022/07/air-fryer-zucchini-chips-2.jpg' ,
                name: 'Air Fryer Zucchini Chips (Panko Crusted)',
                cost: '20',
            },
            {
                id: 10,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2013/12/khaman-dhokla-recipe-1.jpg' , 
                name: 'Khaman Dhokla Recipe (Nylon Khaman)',
                cost: '12',
            },
            {
                id: 11,
                image: 'https://www.spiceupthecurry.com/wp-content/uploads/2023/03/bread-dipping-oil-1.jpg',
                name: 'Bread Dipping Oil (Olive Oil Dip)',
                cost: '25',
            },
            {
                id: 12,
                image:'https://www.spiceupthecurry.com/wp-content/uploads/2013/07/aloo-pakora-1.jpg' ,
                name: 'Aloo Pakora (Potato Bajji)',
                cost: '20',
            }
          
        ];
    
        return (
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
   

export default Veg;
