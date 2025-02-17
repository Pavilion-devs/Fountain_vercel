import { IconProps } from "../../utils/types";


const Pin: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7.5" stroke="white"/>
            <line x1="16" y1="7.5" x2="80" y2="7.5" stroke="white"/>
        </svg>
    );
};

export default Pin;

