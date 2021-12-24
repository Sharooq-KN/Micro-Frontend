import React from "react";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex bg-blue-100">
            <div className="flex-grow"><Link to="/">Home Page</Link> | <Link to="/cart">Cart</Link></div>
            <div className="relative">
                <Login/>
                <MiniCart/>
            </div>
        </div>
    )
}

export default Header;