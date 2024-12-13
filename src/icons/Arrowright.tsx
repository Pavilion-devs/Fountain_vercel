
import { IconProps } from "../../utils/types";


const ArrowRight: React.FC<IconProps> = ({ size = 30, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="82" height="28" viewBox="0 0 82 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.760134 17.6517C0.592783 17.7331 0.453796 17.8729 0.37385 18.0662C0.186552 18.5126 0.388573 19.0628 0.825249 19.2929C14.4808 26.5066 29.9748 28.9584 44.4055 26.2043C58.8362 23.4503 71.8825 15.5434 81.1401 3.95279C81.4351 3.58265 81.3748 3.00462 81.0028 2.66584C80.6309 2.32706 80.0869 2.34802 79.7919 2.72015C70.7696 14.0211 58.0512 21.7221 43.9883 24.4102C29.9234 27.0942 14.8378 24.7056 1.50922 17.673C1.2578 17.5432 0.984528 17.5424 0.763929 17.6498L0.760134 17.6517Z" fill="#40B44B"/>
            <path d="M80.2441 2.24773C80.0539 2.34033 79.9022 2.51197 79.8289 2.73815C79.5752 3.54112 79.5817 4.35643 79.5874 5.14122C79.5896 5.38725 79.5937 5.63744 79.5863 5.88301C79.5675 6.53046 79.4703 7.20062 79.3802 7.84673L78.552 13.7218C78.4813 14.2143 78.8068 14.6993 79.2791 14.8091C79.7513 14.9189 80.1882 14.6084 80.2589 14.1158L81.0872 8.24072C81.1856 7.5442 81.2891 6.81949 81.3092 6.06844C81.318 5.79651 81.3171 5.52411 81.3124 5.25358C81.3077 4.58672 81.2999 3.95223 81.4659 3.42355C81.6142 2.955 81.3665 2.42701 80.9115 2.23673C80.6802 2.13835 80.4381 2.15327 80.2403 2.24957L80.2441 2.24773Z" fill="#40B44B"/>
            <path d="M69.8511 0.925279C69.7218 0.988244 69.6086 1.0845 69.5272 1.21681C69.2735 1.62345 69.3952 2.19221 69.7951 2.49166C70.6848 3.14971 71.7248 3.34336 72.6267 3.47559C75.3401 3.86857 78.0806 3.96002 80.7696 3.75228C81.2401 3.71363 81.5664 3.28198 81.4802 2.77886C81.434 2.27575 80.9956 1.89723 80.5251 1.93587C77.9532 2.13291 75.3358 2.04325 72.7404 1.67009C72.0162 1.56459 71.2623 1.42719 70.7137 1.02516C70.4413 0.823214 70.1135 0.797496 69.8473 0.927133L69.8511 0.925279Z" fill="#40B44B"/>
        </svg>



    );
};

export default ArrowRight;