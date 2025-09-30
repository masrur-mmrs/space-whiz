import React from 'react';
import SolarFalreList from './lists/SolarFalreList';

interface SolarFlaresProps {
    solarFlareData: SolarFlare[];
}

const SolarFlares: React.FC<SolarFlaresProps> = ({ solarFlareData }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl text-stellar-violet text-center font-semibold text-shadow-2xs">Recent Solar Explosions! 💥</h1>
            <SolarFalreList solarFlareData={solarFlareData}/>
        </div>
    );
};


export default SolarFlares;