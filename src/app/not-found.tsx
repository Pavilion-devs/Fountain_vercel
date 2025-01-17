"use client";
import React from 'react';
import "./../styles/not-found.css"
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">COMING SOON</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-subtitle">Our Store is Under Construction</h2>
        <p className="not-found-text">
          We're working hard to bring you an amazing shopping experience. 
          Check back soon for exclusive deals and products!
        </p>
        <Link href="/" className="not-found-button">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;