import React from 'react';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import solarFlarePowerLevelsData from '@/data/solar_flare_power_levels.json'
import SolarFlarePowerCard from './cards/SolarFlarePowerCard';

const SolarFlareLevels: React.FC = ({}) => {
    const solarFlarePowerLevels: SolarFlarePowerLevel[] = solarFlarePowerLevelsData as SolarFlarePowerLevel[]

    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-3xl gap-6 border-2 border-sunburst-orange glass-card">
            <div className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faBoltLightning} style={{color: "#FF9D4E"}}/>
                <h1 className="text-sunburst-orange">Solar Flare Power Levels</h1>
            </div>
            <ul className="flex flex-col sm:flex-row gap-4">
                {
                    solarFlarePowerLevels.map((sfpl, i) => (
                        <SolarFlarePowerCard
                            key={i}
                            icon={sfpl.icon}
                            flareClass={sfpl.flareClass}
                            flareTitle={sfpl.flareTitle}
                            flareClassBackground={sfpl.flareClassBackground}
                            description={sfpl.description}
                        />
                    ))
                }
            </ul>  
        </div>
    );
};


export default SolarFlareLevels;