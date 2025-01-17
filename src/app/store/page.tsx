"use client";
import React from 'react';
import {useState, useEffect} from 'react';
import '../../styles/shop.css';
import Image from 'next/image';
import Footer from '../landing-page/Footer';
import NormalArrowLeftt from '@/icons/NormalArrowLeftt';
import img from "../../images/shopBackgroundImg.png";
import Normalnavbar from '../Nav-menu/Navbar-Green';
import { singleCarabaoDrink } from '@/images';
import { notFound } from 'next/navigation';

const Shop = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerUnit = 10000;

    useEffect(() => {
        // Redirect to 404 page
        notFound();
    }, []);

    // Rest of the component code won't execute due to the redirect
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return null; // We don't need to render anything since we're redirecting
};

export default Shop;