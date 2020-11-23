import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p ><img className="product__starRating" src="https://img.icons8.com/emoji/2x/star-emoji.png" alt="" /></p>
                            ))}
                </div>
                <button>Remove From Basket</button>
                {/* onClick={RemoveFromBasket} */}
            </div>
        </div>
    )
}

export default CheckoutProduct
