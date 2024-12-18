"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ellipse from "@/icons/dot";
import "../../styles/learnfountain.css";
import Image from "next/image";
import img from "../../images/manHoldingDrink.png";
import { largeDrink, sugar } from "@/images";

gsap.registerPlugin(ScrollTrigger);

const Learn = () => {
  useEffect(() => {
    // Text slides in from the left
    gsap.from(".learn-content-text", {
      x: -100, // Slide from the left
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".learn__content",
        start: "top 80%",
        end: "top 20%",
        scrub: true, // Smooth animation when scrolling
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      },
    });

    // Images slide in from the right
    gsap.from(".learn__content-image", {
      x: 100, // Slide from the right
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".learn__content-images_container",
        start: "top 85%",
        end: "top 30%",
        scrub: true, // Smooth scroll-linked animation
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="learn">
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)",
          zIndex: -1,
        }}
      ></div>

      {/* Title */}
      <div className="learn__title">
        <h1 className="learn__title_text">Fuel Your Day with Carabao</h1>
      </div>

      {/* Content */}
      <div className="learn__container_overall">
        <div className="learn__container">
          <div className="learn_content_overall">
            <div className="learn__content">
              <div className="learn-content-text">
                <Ellipse />
                <p className="learn__content-text-1">
                  Boost your energy with every sip, wherever you go.
                </p>
              </div>
              <div className="learn-content-text">
                <Ellipse />
                <p className="learn__content-text-1">
                  Power through your busiest days with a refreshing.
                </p>
              </div>
              <div className="learn-content-text">
                <Ellipse />
                <p className="learn__content-text-1">
                  Tropical flavors — stay energized, stay focused.
                </p>
              </div>
              <a href="/carabao" className="learn_content_button">
                LEARN MORE ABOUT CARABAO
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="learn__content-images_container">
            <div className="learn__content-images">
              <div className="learn__content-image">
                <Image
                  className="learn_image_zero"
                  src={largeDrink}
                  alt="Drink 1"
                  width={260}
                  height={300}
                />
              </div>
              <div className="learn__content-image">
                <Image
                  className="learn_image_two"
                  src={sugar}
                  alt="Drink 2"
                  width={260}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
