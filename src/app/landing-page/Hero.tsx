// 'use client';

// import React, { useEffect, useRef } from "react";
// import "../../styles/Hero.css";
// import img from "../../images/herobackgroundImg.png";

// const Hero = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const descriptionRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Add animation classes after component mount
//     setTimeout(() => {
//       titleRef.current?.classList.add('animate-in');
//       setTimeout(() => {
//         descriptionRef.current?.classList.add('animate-in');
//         ctaRef.current?.classList.add('animate-in');
//       }, 400);
//     }, 100);
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero__background" style={{
//         backgroundImage: `url(${img.src})`,
//       }}></div>
      
//       <div className="hero__overlay"></div>
      
//       <div className="hero__content">
//         <div className="hero__text-content">
//           <h1 ref={titleRef} className="hero__title">
//             <span className="hero__title-line">Fuel your day</span>
//             <span className="hero__title-line">with <span className="hero__title-highlight">quality</span></span>
//           </h1>
          
//           <p ref={descriptionRef} className="hero__description">
//             We are the missing piece to finding products that elevate your everyday experience.
//           </p>

//           <div ref={ctaRef} className="hero__cta-container">
//             <a href="#products" className="hero__cta-button">
//               Explore Products
//             </a>
//             <div className="hero__scroll-indicator">
//               <span>Scroll Down</span>
//               <div className="hero__scroll-arrow"></div>
//             </div>
//           </div>
//         </div>

//         <div className="hero__animated-elements">
//           <div className="hero__energy-burst"></div>
//           <div className="hero__floating-cans">
//             {[...Array(3)].map((_, i) => (
//               <div key={i} className={`hero__floating-can hero__floating-can-${i + 1}`}></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// Hero.tsx
'use client';

import React, { useEffect, useRef } from "react";
import "../../styles/Hero.css";
import img from "../../images/herobackgroundImg.png";

const Hero = () => {
  // const titleRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Animate each character of the title
  //   const animateText = () => {
  //     const titleLines = titleRef.current?.querySelectorAll('.hero__title-line');
  //     if (!titleLines) return;

  //     titleLines.forEach((line, lineIndex) => {
  //       const text = line.textContent || '';
  //       line.textContent = '';
        
  //       text.split('').forEach((char, charIndex) => {
  //         const span = document.createElement('span');
  //         span.className = 'hero__title-char';
  //         span.textContent = char;
  //         span.style.animationDelay = `${(lineIndex * 0.2) + (charIndex * 0.04)}s`;
          
  //         if (text.trim() === 'quality') {
  //           span.className = 'hero__title-char hero__title-highlight';
  //         }
          
  //         line.appendChild(span);
  //       });
  //     });
  //   };

  //   animateText();
  // }, []);

  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${img.src})` }}
      />
      <div className="hero__overlay" />
      
      <div className="hero__content">
        <div className="hero__text-content">
          <div className="hero__title">
            <h1 className="hero__title-line">Fuel your day with quality</h1>
          </div>
          
          <p className="hero__description">
            We are the missing piece to finding products that 
            elevate your everyday experience.
          </p>

          <div className="hero__cta-section">
            <a href="/shop" className="hero__cta-button">
              Explore Products
            </a>
            
            <div className="hero__scroll-indicator">
              <div className="hero__scroll-text">Scroll to Discover</div>
              <div className="hero__scroll-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;