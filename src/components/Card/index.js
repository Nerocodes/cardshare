import React from 'react';
import './card.css';

const MainCard = ({ image, title, name, price, category}) => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt={title}></img>
            </div>
            <div className="description">
                <p className="title">{title}</p>
                <p className="name">by {name}</p>
                <div className="d-flex justify-content-between">
                    <p className="price">${price}</p>
                    <p className="category">{category}</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard;