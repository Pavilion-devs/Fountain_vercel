'use client'
import { useEffect } from 'react';
import Ellipse from "@/icons/dot";
import "../../styles/learnfountain.css";
import Image from "next/image";
import { largeDrink, mediumDrink, smallDrink } from "@/images";
import img from "../../images/manHoldingDrink.png";

const Learn = () => {
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                // Toggle animation class based on visibility
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, 100);
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
            rootMargin: '-50px'
        });

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.animate-element');
        animatedElements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="learn">
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
                    filter: 'brightness(50%)',
                    zIndex: -1,
                }}
            ></div>
            <div className="learn__title">
                <h1 className="learn__title_text animate-element fade-down">
                    Fuel Your Day with Carabao
                </h1>
            </div>
            <div className="learn__container_overall">
                <div className="learn__container">
                    <div className="learn_content_overall">
                        <div className="learn__content animate-element slide-left">
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
                                    Tropical flavors —stay energized, stay focused.
                                </p>
                            </div>
                            <a href="/brand/carabao" className="learn_content_button">
                                LEARN MORE ABOUT CARABAO
                            </a>
                        </div>
                    </div>
                    <div className="learn__content-images_container">
                        <div className="learn__content-images">
                            <div className="animate-element slide-right delay-1">
                                <Image
                                    className="learn_image_zero"
                                    src={largeDrink}
                                    alt="Learn1"
                                    width={260}
                                    height={300}
                                />
                            </div>
                            <div className="animate-element slide-right delay-2">
                                <Image
                                    className="learn_image_one"
                                    src={mediumDrink}
                                    alt="Learn1"
                                    width={178}
                                    height={208}
                                />
                            </div>
                            <div className="animate-element slide-right delay-3">
                                <Image
                                    className="learn_image_two"
                                    src={smallDrink}
                                    id='smalldrink'
                                    alt="Learn1"
                                    width={178}
                                    height={208}
                                />
                            </div>
                        </div>
                        <div className="learn__content_sliders">
                            <a href="" className="learn__content_sliders_btn" aria-disabled>&lt;</a>
                            <a href="" className="learn__content_sliders_btn">&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learn;