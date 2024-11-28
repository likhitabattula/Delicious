import React from "react";
import Card from './Card';
function Salads(){
    const cardsData = [
        {
            id: 1,
            image: 'https://www.spiceupthecurry.com/wp-content/uploads/2020/05/onion-salad-2_1.jpg', 
            name: 'Indian Onion Salad (Laccha Pyaaz)',
            cost: '12',
        },
        {
            id: 2,
            image: 'https://www.eatingwell.com/thmb/iyWit0vMtAJz3RYkDDPBbv0Ai_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/White-Bean-Veggie-Salad-573a16ff629e4ca0899573d20c632bfe.jpeg',
            name: 'White Bean & Veggie Salad',
            cost: '20',
        },
        {
            id: 3,
            image: 'https://www.eatingwell.com/thmb/BG5ct30axe5BKrhThE48AxVb_l4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-4f304ec0564944f98016b36765124667.jpg',
            name: 'Eat-the-Rainbow Chopped Salad with Basil & Mozzarella',
            cost: '20',
        },
        {
            id: 4,
            image: 'https://www.eatingwell.com/thmb/f6eTthZ4klfrGkLCpYc03f3dYdg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4727256-ca1cc0cb72274b4fb2a143642b92141c.jpg', 
            name: 'Citrus Lime Tofu Salad',
            cost: '12',
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
export default Salads;