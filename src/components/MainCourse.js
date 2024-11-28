import React from "react";
import Card from './Card';
function MainCourse(){
    const cardsData = [
        {
            id: 1,
            image: 'https://www.whiskaffair.com/wp-content/uploads/2023/05/Paneer-Kathi-Roll-2-6-360x480.jpg', 
            name: 'Paneer Kathi Roll',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://www.whiskaffair.com/wp-content/uploads/2021/05/Tuscan-Chicken-Mac-And-Cheese-2-3-360x480.jpg',
            name: 'Tuscan Chicken Mac and Cheese',
            cost: '25',
        },
        {
            id: 3,
            image: 'https://www.whiskaffair.com/wp-content/uploads/2022/08/Amish-Chicken-2-3-360x480.jpg',
            name: 'Amish Chicken',
            cost: '20',
        },
        
    ];
    return(
        <div>
           <div className="card-container">
                {cardsData.map((card) => (
                    <Card key={card.id} image={card.image} name={card.name} cost={card.cost} />
                ))}
            </div>
        </div>
    )
}
export default MainCourse;