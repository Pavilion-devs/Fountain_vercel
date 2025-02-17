'use client';
import React, { useState } from "react";
import "../../styles/Green-Navbar.css"
import Image from "next/image";
import Link from "next/link";
import Search from "@/icons/search";
import Menu from "@/icons/menu";
import User from "@/icons/user";
import { whiteLogo } from "@/images";
import Cart from "@/icons/shoppingcart";
import MenuOverlay from "./MenuOverlay";
import SearchOverlay from "./SearchOverlay";

const Normalnavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  return (
    <>
    <header className="normal-navbar">
      <Link href="/">
        <Image
          src={whiteLogo}
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      </Link>

      <div className="navbar__cta">
        <button 
            className="navbar__cta-btn"
            id="mycart"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search/>
          </button>
        <Link href="/cart" id="mycart" className="navbar__cta-btn">
          <Cart />
        </Link>
        <a className="navbar__cta-btn">
          <User/>
        </a>
        <button 
            className="navbar__menu-btn"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
      </div>
    </header>

    <MenuOverlay 
    isOpen={isMenuOpen}
    onClose={() => setIsMenuOpen(false)}
    />
    <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
    />

  </>
  );
};

export default Normalnavbar;
