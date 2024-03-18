import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    const [tile,setTile] = useState("shop");
    function clickHandler(tileHead){
        setTile(tileHead);
    }
    return(
        <div className='nav'>
            <div className='nav-logo flex'>
                <img src={logo} alt="shopi logo" />
                <div>SHOPI</div>
            </div>
            <ul className='nav-tiles flex'>
                <li className='nav-disk' onClick={()=>clickHandler("shop")}><Link to='/' className='l'>Shop </Link>{tile==="shop"? (<hr/>):(<></>) }</li>
                <li className='nav-disk' onClick={()=>clickHandler("men")}><Link to='/mens' className='l'>Men </Link> {tile==="men"? (<hr/>):(<></>) }</li>
                <li className='nav-disk' onClick={()=>clickHandler("women")}><Link to='/womens' className='l'>Women </Link> {tile==="women"? (<hr/>):(<></>) }</li>
                <li className='nav-disk' onClick={()=>clickHandler("kids")}><Link to='/kids' className='l'>Kids </Link> {tile==="kids"? (<hr/>):(<></>) }</li>
            </ul>
            <div className='nav-login flex'>
                <Link to='/login' className='l'>
                <div className='login-btn'>
                    Login
                </div> 
                </Link>
                <Link to='/cart' className='l'><img src={cart_icon} alt="cart icon" /></Link>
                
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}



export default Navbar;