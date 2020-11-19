import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p ><img className="product__starRating" src="https://img.icons8.com/emoji/2x/star-emoji.png" /></p>
                            ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product

