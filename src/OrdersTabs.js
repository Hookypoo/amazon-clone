import React from 'react'
import "./OrdersTabs.css";
import SearchIcon from '@material-ui/icons/Search';

function OrdersTabs() {
    return (
        <div className="orders__container">
            <div className="your__account">
                <h4>Your Account</h4>
            </div>
            <div className="ordersAccount__pointer">{">"}</div>
            <div className="orders__tabName">
                Buy Again
                    </div>
            <div className="orders__tabsTitle">
                <div className="orders__mainTitle">
                    <h1>Your Orders</h1>
                </div>
                <div className="orders__input">
                    <SearchIcon className="orders__inputSearchIcon" />
                    <input type="text" className="orders__searchInput" />
                    <button className="orders__searchButton">Search Orders</button>
                </div>
            </div>
        </div>

    )
}

export default OrdersTabs
