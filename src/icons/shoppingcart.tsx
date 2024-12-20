import { IconProps } from "../../utils/types";


const Cart: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (

        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 19C14.7091 19 16.5 17.2091 16.5 15C16.5 12.7909 14.7091 11 12.5 11C10.2909 11 8.5 12.7909 8.5 15C8.5 17.2091 10.2909 19 12.5 19Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.9399 14.9995L11.5899 15.6495C11.7799 15.8395 12.0899 15.8495 12.2799 15.6595L14.0599 14.0195" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.50007 22H15.5001C19.5201 22 20.2401 20.39 20.4501 18.43L21.2001 12.43C21.4701 9.99 20.7701 8 16.5001 8H8.50007C4.23007 8 3.53007 9.99 3.80007 12.43L4.55007 18.43C4.76007 20.39 5.48007 22 9.50007 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 7.66952V6.69952C8 4.44952 9.81 2.23952 12.06 2.02952C14.74 1.76952 17 3.87952 17 6.50952V7.88952" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


    );
};

export default Cart;
