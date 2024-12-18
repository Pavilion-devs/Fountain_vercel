"use client";
import React, { useState } from "react";
import Image from 'next/image';
import '../../styles/cart.modules.css';
import Normalnavbar from '../Nav-menu/Navbar-Green';
import Link from 'next/link';
import Search from '@/icons/search';
import User from '@/icons/user';
import Menu from '@/icons/menu';
import { blackLogo, cartImage } from '@/images';
import Searchblack from '@/icons/search-black';
import Userblack from '@/icons/userBlack';
import Shoppingcartblack from '@/icons/shoppingCartBlack';
import Menublack from '@/icons/menuBlack';
import MenuOverlay from "../Nav-menu/MenuOverlay";
import SearchOverlay from "../Nav-menu/SearchOverlay";


const Cart = () => {

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    return (
        <>
        <section>
            <div className='normal_navbar'>
                <Image src={blackLogo} className='land-navbar-img' alt=''/>
                <div className='navbar_btn'>
                    <a href="" className='navbar_btn_a'><Searchblack/></a>
                    <a href="/cart" className='navbar_btn_a'><Shoppingcartblack/></a>
                    <a href="" className='navbar_btn_a'><Userblack/></a>
                    <button 
                        className="navbar_btn_a"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menublack />
                    </button>
                </div>
            </div>
            <div>
                <div className="cart-names-identity">
                    <a href="/cart" className=''>SHOPPING CART</a>
                    <p>&gt;</p>
                    <a href="/">CHECKOUT</a>
                </div>
            </div>
            <div className="cart">
                <div className='cart_container'>
                    <h1>YOUR CART</h1>
                    <p>Looks like you haven’t added anything yet. Let’s fix that!</p>
                    <a href='/shop'>&lt; CONTINUE SHOPPING</a>
                </div>
        </div>
        </section>

        <MenuOverlay 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        />
        <SearchOverlay 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
        />
    </>
    )

}

export default Cart;