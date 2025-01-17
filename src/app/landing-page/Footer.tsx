import React from "react";
import "../../styles/Footer.css"
import Image from "next/image";
import { whiteLogo } from "@/images";
import Twitter from "@/icons/twitter";
import Link from "next/link";
import LinkedIn from "@/icons/LinkedIn";
import Instagram from "@/icons/Instagram";
import Internet from "@/icons/Internet";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container">
            <div>
                <Image src={whiteLogo} className="footer-container_logo_img" width={220} height={48} alt="Fountain logo"/>
            </div>
            <div className="footer_container_content">
                <div className="footer-location">
                    <h1 className="footer-header">Location</h1>
                    <div className="footer-location_content">
                        <span>KM 42 LEKKI-EPE EXPRESSWAY, SANGOTEDO, LEKKI, LAGOS STATE</span>
                    </div>
                </div>
                <div className="footer-contact">
                    <h1 className="footer-header">Contact Us</h1>
                    <div className="footer-location_content">
                        <span>+234-708-735-2090</span>
                        <a href="mailto:contact@fountain.ng">contact@fountain.ng</a>
                    </div>
                </div>
                <div className="footer-brand">
                    <h1 className="footer-header">Brand Info</h1>
                    <div className="footer-location_content">
                        <span><a href="/brand">OUR BRAND</a></span>
                        <span><a href="/shop">OUR SHOP</a></span>
                        <span><a href="/cart">CART</a></span>
                        <span><a href='/store'>OUR STORES</a></span>
                        <span><a>ACCOUNT PROFILE</a></span>
                    </div>
                </div>
                <div className="footer-help">
                    <h1 className="footer-header">Help</h1>
                    <div className="footer-location_content">
                        <span><a>FAQS</a></span>
                        <span><a href="https://www.instagram.com/fountain.ng/?igsh=MWJldHZxemk2d3pkYw%3D%3D#" target="_blank">CONTACT US</a></span>
                        <span><a>SHIPPING</a></span>
                        <span><a>PRIVACY POLICY</a></span>
                        <span><a>TERMS & CONDITION</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom_content">
            <div className="footer-social_content">
                <p>©Copyright 2024 Fountain, Inc.</p>
                <div className="footer-socials">
                    <span><a><Twitter className="special_social_icon"/></a></span>
                    <span><a><LinkedIn className="special_social_icon"/></a></span>
                    <span><a href="https://www.instagram.com/fountain.ng/?igsh=MWJldHZxemk2d3pkYw%3D%3D#" target="_blank"><Instagram className="special_social_icon"/></a></span>
                    <span><a href="https://www.fountain.ng/"><Internet className="special_social_icon"/></a></span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;
