"use client";
import React from 'react';
import Image from 'next/image';
import '../../styles/cart.modules.css';
import Normalnavbar from '../Nav-menu/Navbar-Green';
import Link from 'next/link';
import Search from '@/icons/search';
import User from '@/icons/user';
import Menu from '@/icons/menu';
import { blackLogo, cartImage } from '@/images';


const Cart = () => {

    return (
        <section>
            <Normalnavbar/>
            <div>
                <div className="cart-names-identity">
                    <a href="/cart" className=''>SHOPPING CART</a>
                    <p>&gt;</p>
                    <a href="/">CHECKOUT</a>
                </div>
            </div>
            <div className="cart">
                <div className='cart_container'>
                    <h1>YOUR <Image src={cartImage} alt=""/>CART</h1>
                    <p>Looks like you haven’t added anything yet. Let’s fix that!</p>
                    <a href='/shop'>&lt; CONTINUE SHOPPING</a>
                </div>
        </div>
        </section>
    )

}

export default Cart;