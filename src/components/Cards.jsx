import React from 'react';
import image1 from './images/sports1.avif';
import image2 from './images/sports4.webp';
import image3 from './images/sports5.webp';
import './css/cards.css';

function Cards() {
  return (
    <div className='cardsPart'>
      <h2 className='cardHeader'>Our Features</h2>
      <div className="cardsContainer">
        <div className="card">
            <img src={image1} alt="First Image" className='cardImage'/>
            <h3>Exclusive Sport Content</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
        <div className="card">
            <img src={image2} alt="Second Image" className='cardImage'/>
            <h3>Live Updates and Scores</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
        <div className="card">
            <img src={image3} alt="Third Image" className='cardImage'/>
            <h3>In-depth Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
        <div className="card">
            <img src={image1} alt="First Image" className='cardImage'/>
            <h3>Exclusive Sport Content</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
        <div className="card">
            <img src={image2} alt="Second Image" className='cardImage'/>
            <h3>Live Updates and Scores</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
        <div className="card">
            <img src={image3} alt="Third Image" className='cardImage'/>
            <h3>In-depth Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eligendi sequi temporibus totam officia commodi ab cum dicta, repellat ut porro, veritatis tempore fugit quidem, vel suscipit soluta. Quaerat, minus?</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
