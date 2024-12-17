import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true,     // Animation only occurs once
  });
}, []);
