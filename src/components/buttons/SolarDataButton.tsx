import React from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';


interface SolarDataButtonProps {
    getData: () => Promise<void>;
}


const SolarDataButton: React.FC<SolarDataButtonProps> = ({ getData }) => {
    return (
        <HoverScaleWrapper>
            <button
                onClick={getData}
                className="text-center font-semibold text-shadow-2xs bg-stellar-violet p-2.5 rounded-xl violet-glow cursor-pointer"
            >
                Get Latest Space Data!
            </button>
        </HoverScaleWrapper>
    );
};


export default SolarDataButton;