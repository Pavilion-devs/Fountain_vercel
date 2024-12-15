import React from "react";
import Image from "next/image";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import Footer from "../landing-page/Footer";
import '../../styles/store.css';
import img from "../../images/storeimage.jpeg";
import Locator from "../landing-page/storeLocator";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";

const Store = () => {
  return (
    <section>
      <div className="store_main">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(25%)',
          zIndex: -1,
        }}
      ></div>
        <Normalnavbar />
        <div className="store__container">
          <div className="store__content">
            <h1 className="store__content-title">OUR STORES</h1>
            <p className="store__content-text">
            Start exploring our stores near you and let us serve you.
            </p>
          </div>
        </div>
        <div className="store-names-identity">
            <p> <NormalArrowLeftt/></p>
            <a href="/">HOME</a>
            
        </div>
      </div>


    <Locator/>
    <Footer/>



    </section>
  );
};

export default Store;