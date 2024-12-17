import { IconProps } from "../../utils/types";


const Userblack: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.09 22C21.09 18.13 17.24 15 12.5 15C7.76003 15 3.91003 18.13 3.91003 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default Userblack;
