import React from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import "./ReturnOrders.css"


function ReturnOrders() {
    return (
        <nav className="returns">
            <div className="returns__nav">

                <Link to="/login" className="returns__link">
                    <div className="returns__option option1">
                        <MenuIcon color="primary" style={{ fontSize: 28 }} className="returns__menuIcon" />
                        <span className="returns__optionLineOne all"> All</span>
                    </div>
                </Link>

                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne"> Today's Deals </span>
                    </div>
                </Link>

                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">User's Amazon.com</span>
                    </div>
                </Link>

                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Customer Service</span>
                    </div>
                </Link>

                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Browsing History</span>
                    </div>
                </Link>
                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Buy Again</span>
                    </div>
                </Link>
                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Gift Cards</span>
                    </div>
                </Link>
                <Link to="/login" className="returns__link">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Sell</span>
                    </div>
                </Link>
                <Link to="/" className="returns__link9">
                    <div className="returns__option">
                        <span className="returns__optionLineOne">Amazon's message</span>
                    </div>
                </Link>
            </div>
        </nav>
    )

}

export default ReturnOrders;

