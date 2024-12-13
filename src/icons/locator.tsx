
import { IconProps } from "../../utils/types";


const Locatoricon: React.FC<IconProps> = ({ size = 60, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width={svgSize} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13.4304C13.7231 13.4304 15.12 12.0336 15.12 10.3104C15.12 8.5873 13.7231 7.19043 12 7.19043C10.2769 7.19043 8.88 8.5873 8.88 10.3104C8.88 12.0336 10.2769 13.4304 12 13.4304Z" stroke="#7F7F7F" strokeOpacity="0.5" strokeWidth="1.5" style={{ mixBlendMode: 'luminosity' }}/>
            <path d="M12 13.4304C13.7231 13.4304 15.12 12.0336 15.12 10.3104C15.12 8.5873 13.7231 7.19043 12 7.19043C10.2769 7.19043 8.88 8.5873 8.88 10.3104C8.88 12.0336 10.2769 13.4304 12 13.4304Z" stroke="#3D3D3D" strokeWidth="1.5" style={{ mixBlendMode: 'overlay' }}/>
            <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#7F7F7F" strokeOpacity="0.5" strokeWidth="1.5" style={{ mixBlendMode: 'luminosity' }}/>
            <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#3D3D3D" strokeWidth="1.5" style={{ mixBlendMode: 'overlay' }}/>
        </svg>

    );
};

export default Locatoricon;