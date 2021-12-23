import React from "react";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

const Header = () => {
    return (
        <div className="flex bg-blue-100">
            <div className="flex-grow">Home Page Header</div>
            <div className="relative">
                <Login/>
                <MiniCart/>
            </div>
        </div>
    )
}

export default Header;