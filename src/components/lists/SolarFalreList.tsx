import React from 'react';
import SolarFlareCard from '../cards/SolarFlareCard';


interface SolarFalreListProps {
    solarFlareData: SolarFlare[]
}


const SolarFalreList: React.FC<SolarFalreListProps> = ({ solarFlareData }) => {
    return (
        <div className="grid grid-rows-1 sm:grid-cols-2 items-center justify-center gap-4">
            {[...solarFlareData].reverse().map((solarFlare, i) => (
                <SolarFlareCard
                    key={i}
                    flrID={solarFlare.flrID}
                    beginTime={solarFlare.beginTime}
                    classType={solarFlare.classType}
                    sourceLocation={solarFlare.sourceLocation}
                    note={solarFlare.note}
                    link={solarFlare.link}
                />))}
        </div>
    );
};


export default SolarFalreList;