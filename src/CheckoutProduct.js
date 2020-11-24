import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        //remove item from basket....
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

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
                <button onClick={RemoveFromBasket}>Remove From Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
