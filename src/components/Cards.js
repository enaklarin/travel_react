import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";



function Cards() {
  return (
  <div className='cards'>
      <h1> Check out these EPIC destinations!</h1>
      <div className="cards__container">
          <div className="cards__wraper">
              <ul className="cards__items">
                
                <CardItem
                  src="/images/img-2.jpeg"
                  text="Explore the hidden waterfall deep
                  inside the Amazon Jungle"
                  label="Adventure"
                  path="/services"
                  />
               
                 
                    <CardItem
                  src="/images/img-3.jpeg"
                  text="Travel through the Island o Bali in 
                  a Private Cruise"
                  label="Luxury"
                  path="/services"
                
                  />
                  </ul>
                  <ul className="cards__items">
                  <CardItem
                    src="/images/img-4.jpeg"
                  text="Explore the hidden waterfall deep
                  inside the Amazon Jungle"
                  label="Adventure"
                  path="/services"
                  />
                    <CardItem
                    src="/images/img-5.jpeg"
                  text="Explore the hidden waterfall deep
                  inside the Amazon Jungle"
                  label="Adventure"
                  path="/services"
                  />
                    <CardItem
                    src="/images/img-6.jpeg"
                  text="Explore the hidden waterfall deep
                  inside the Amazon Jungle"
                  label="Adventure"
                  path="/services"
                  />
                  </ul>
  
              

          </div>
      </div>
  </div>
  )
}

export default Cards;

