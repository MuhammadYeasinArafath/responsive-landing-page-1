import React from 'react';
import "./Navbar.css";
import LOGO from "../../Assets/logo.png";
import CART from "../../Assets/cart.png";

const Navbar = () => {
    return (
        <> 
           <div className="navbar">
                 <img src={LOGO} alt="logo" className='logo'/>
                 <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Category</a></li>
                    </ul>
                 </nav>
                 <img src={CART} alt="cart" className='cart'/>
           </div> 
        </>
    );
};

export default Navbar;