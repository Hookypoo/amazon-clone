import React from 'react';
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/DCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        you have no items in your basket. to buy one or more items, click
                        "Add to basket" next to an item.
                    </p>
                </div>

            ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* Here we list out all of the checkout products */}

                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                )}
        </div>
    );
}

export default Checkout

