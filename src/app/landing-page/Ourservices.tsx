'use client'
import { useEffect, useRef } from 'react';
import { gymExercise, icePolygon, store, sunsetExercise } from "@/images";
import "../../styles/Services.css"
import Image from 'next/image';

const Services = () => {
  const useScrollAnimation = (selector: string, animationClass: string): void => {
    useEffect(() => {
      if (!("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      });

      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, [selector, animationClass]);
  };

  useScrollAnimation(".about__title-1", "active");
  useScrollAnimation(".about__title-2", "active");
  useScrollAnimation(".about__title-3", "active");
  useScrollAnimation(".about__title-4", "active");

  // Apply animations to text sections
  useScrollAnimation(".about__description-1.left", "slide-in-left");
  useScrollAnimation(".about__description-1.right", "slide-in-right");

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter" style={{ animationDelay: `${index * 0.05}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="about">
      <div className="about__container">
        <div className="about-text">
          <h2 className="about__title-1 animate">
            {splitText("WELCOME TO THE FOUNTAIN FAMILY.")}
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-2 animate">
              {splitText("WE ARE MORE THAN JUST A DISTRIBUTOR")}
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-3 animate">
            {splitText("WE ARE YOUR GO-TO SOURCE FOR")}
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-4 animate">
            {splitText("ENERGY SOLUTIONS.")}
          </h2>
        </div>

        <div className="about-description">
          <p 
            className="about__description-1 left"
          >
            As the exclusive distributor of Carabao Energy Drink in Nigeria, 
            we ensure that the products you love are available wherever and 
            whenever you need them.
          </p>
          <p
            className="about__description-1 right"
          >
            We make quality energy products easily accessible, 
            whether you're powering through a busy workday or 
            gearing up for your next big adventure. 
          </p>
        </div>
        <a href="/carabao" className="about-description-btn bounce-hover">
          OUR STORY, OUR BRAND
        </a>
      </div>
    </section>
  );
};

export default Services;