"use client"
import React from "react";
import Image from "next/image";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import Footer from "../landing-page/Footer";
import imgfirst from "../../images/movement_1.png";
import imgsecond from "../../images/movement_2.jpeg";
import "../../styles/all-brands.css";
import img from "../../images/brandBackgroundImage.jpeg";
import {
  askamaya,
  blenco,
  chandever,
  chopilos,
  clubLogo,
  drinkPack,
  ebeano,
  founder,
  four,
  journey,
  libraryLogo,
  movement_two,
  one,
  passion,
  realfounder,
  ritz,
  secretPalace,
  shoprite,
  star,
  teamImage,
  three,
  two,
  vodaBeach,
} from "@/images";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";
import { useEffect } from "react";

const Brand = () => {

  useEffect(() => {
    console.log("Image source:", imgsecond.src); // Check if this prints a valid path
}, []);
  return (
    <section>
      <div className="brand">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img.src})`, // Correct way to reference the imported image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(50%)",
            zIndex: -1, // Ensures it's behind content
          }}
        ></div>
        <Normalnavbar />
        <div className="brand__container">
          <div className="brand__content">
            <h1 className="brand__content-title">OUR BRAND</h1>
            <p className="brand__content-text">
              Your journey starts here, with products that elevate your everyday
              experience.
            </p>
          </div>
        </div>
        <div className="brand-names-identity">
          <p>
            {" "}
            <NormalArrowLeftt />
          </p>
          <a href="/">HOME</a>
        </div>
      </div>

      {/* ABOUT BRAND */}
      <div className="brand__about">
        <div>
          <h1 className="brand__about_title">ABOUT US</h1>
        </div>
        <div className="brand__about_content">
          <Image
            src={realfounder}
            width={576}
            height={400}
            id="brand__about_content_image"
            alt="founder image"
          />
          <div className="brand__about_content-text">
            <p className="brand__about_content-text_1">
              <span className="brand__about_content-text-span">
                Fountain Impex Ltd.
              </span>{" "}
              is more than just a distributor — we’re a trusted partner in
              energizing and refreshing lives across Nigeria.{" "}
            </p>
            <p className="brand__about_content-text_3">
              As the exclusive distributor of Carabao Energy Drink, we proudly
              bring a world-class product known for its exceptional taste,
              quality, and balanced energy.{" "}
            </p>
            <p className="brand__about_content-text_1">
              <span className="brand__about_content-text-span">
                Our goal is simple:
              </span>{" "}
              to provide Nigerians with premium beverages that keep them
              energized, empowered, and ready to take on life.
            </p>
          </div>
        </div>
      </div>

      {/* BRAND jOURNEY AND COMMITMENT*/}

      <div className="brand__journey">
        <div className="brand__about_title_overall">
          <h1 className="brand__journey_title">OUR JOURNEY & COMMITMENT</h1>
        </div>

        <div className="brand__journey_content">
          <div className="brand__journey_content-text">
            <p className="brand__journey_content-text_1">
              Since partnering with Carabao,{" "}
              <span className="brand__about_content-text-span">
                Fountain Impex Ltd.
              </span>{" "}
              has achieved remarkable milestones, distributing over a million
              cans within the first four months. This success reflects our
              dedication to offering a premium product that resonates with
              consumers’ lifestyles, whether for athletes, students,
              professionals, or anyone needing a boost of vitality.
            </p>
          </div>
          <Image
            src={teamImage}
            id="brand_journey_main_image"
            width={576}
            height={400}
            alt=""
          />
        </div>
      </div>

      {/* BRAND QUALITY */}
      <div className="brand__quality">
        <div className="brand__quality_container">
          <div className="brand__quality_container_first">
            <h1>EXPLORE OUR PARTNERS</h1>
            <Image
              className="brand__quality_container_first_image"
              src={drinkPack}
              width={450}
              height={336}
              alt=""
            />
          </div>
          <div className="brand__quality_container_second">
            <div className="brand__quality_container_second_main-content">
              <h1 className="brand__quality_container_second_main-content_header">
                EXPLORE OUR PARTNERS
              </h1>
              <div className="brand__quality_container_second_main-content-2">
                <h1>Carabao: a brand of quality and energy</h1>
                <p>
                  Carabao Energy Drink is a globally recognized brand,
                  celebrated for its unique flavor, low-sugar formulation, and
                  health benefits, including rich doses of B6 and B12 vitamins.
                </p>
              </div>
              <a href="/brand/carabao" className="brand-quality-btn">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND SERVICES */}
      <div className="brand__services">
        <div className="brand__services_header">
          <div className="brand__Services_title_main">
            <h1 className="brand__services_title" id="services">
              OUR SERVICES
            </h1>
          </div>
          <div className="brand__services_title_p">
            <p>We don’t just deliver products — we build relationships. </p>
            <p>
              Our services are tailored to help our partners grow, whether it’s
              through:
            </p>
          </div>
        </div>

        <div className="brand__services_container">
          <div className="brand__services_box">
            <div className="brand__services_box_content">
              <div className="brand__services_box_content_img">
                <Image className="number" src={one} alt="" />
              </div>
              <h1>Bulk Discounts</h1>
              <p>
                Enjoy competitive pricing on bulk orders, designed to support
                your business growth with high-quality, affordable products.
              </p>
            </div>
          </div>
          <div className="brand__services_box">
            <div className="brand__services_box_content">
              <div className="brand__services_box_content_img">
                <Image className="number" src={two} alt="" />
              </div>
              <h1>Fast Delivery</h1>
              <p>
                Count on reliable, on-time delivery across Nigeria to keep your
                shelves stocked and your customers satisfied.
              </p>
            </div>
          </div>
          <div className="brand__services_box">
            <div className="brand__services_box_content">
              <div className="brand__services_box_content_img">
                <Image className="number" src={three} alt="" />
              </div>
              <h1>Dedicated Support</h1>
              <p>
                Our support team is here for you, ready to assist with orders,
                inquiries, and tailored solutions for your business.
              </p>
            </div>
          </div>
          <div className="brand__services_box">
            <div className="brand__services_box_content">
              <div className="brand__services_box_content_img">
                <Image className="number" src={four} alt="" />
              </div>
              <h1>Flexible Solutions</h1>
              <p>
                We offer customizable distribution options to fit your business
                needs, ensuring a seamless partnership experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND MOVEMENT */}
      <div className="brand__movement">
      <div className="brand__movement_second">
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
  <Image
    src={movement_two}
    alt="Background"
    layout="fill"
    objectFit="cover"
    style={{ filter: "brightness(50%)" }}
  />
</div>
          <div className="brand__movement_second_container">
            <div className="brand__movement_second_container_header">
              <span className="line"></span>
              <h1>BE PART OF OUR SUCCESS</h1>
            </div>
            <div className="brand__movement_second_container_text">
              <h1>Partner with Fountain today.</h1>
              <p>
                Join us in shaping the future of energy drinks in Nigeria.
                Partner with Fountain Impex Ltd. and bring the taste of quality,
                energy, and excellence to your customers. Contact us today to
                explore how we can work together to fuel success.
              </p>
            </div>
            <div className="movement_btn_div">
              <a href="/distributor" className="movement_btn">
                JOIN THE MOVEMENT
              </a>
            </div>
          </div>
        </div>


        <div className="brand__movement_first">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${imgfirst.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(100%)",
              zIndex: -1, // Ensures it's behind content
            }}
          ></div>
          <div className="brand__movement_first_container">
            <div className="brand__movement_first_container_header">
              <span className="liner"></span>
              <h1>OUR SPONSORS</h1>
            </div>
            <div className="brand__movement_first_container_text">
            <div className="brand__sponsor_container">
          <div>
            <Image src={shoprite} width={150} height={64} alt="" />
          </div>
          <div>
            <Image src={clubLogo} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={libraryLogo} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={blenco} width={150} height={64} alt="" />
          </div>
          <div>
            <Image src={chopilos} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={chandever} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={ritz} width={78} height={64}  alt="" />
          </div>
          <div>
            <Image src={secretPalace} width={150} height={64} alt="" />
          </div>
          <div>
            <Image src={ebeano} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={askamaya} width={78} height={64} alt="" />
          </div>
          <div>
            <Image src={vodaBeach} width={78} height={64} alt="" />
          </div>
        </div>
        </div>
          </div>
        </div>
      </div>

      {/* BRANDS SPONSOR */}


      <Footer />
    </section>
  );
};

export default Brand;
