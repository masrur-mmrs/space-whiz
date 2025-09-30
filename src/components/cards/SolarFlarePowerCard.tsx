import React from 'react';

interface SolarFlarePowerCardProps {
    icon: string;
    flareClass: string;
    flareTitle: string;
    flareClassBackground: string;
    description: string;
}

const SolarFlarePowerCard: React.FC<SolarFlarePowerCardProps> = ({ icon, flareClass, flareTitle, flareClassBackground, description }) => {
    return (
        <div className="flex flex-col items-center justify-between p-6 rounded-3xl bg-space-blue border-1 border-cosmic-blue flex-1 shadow-2xl gap-2">
            <h3 className="text-4xl">{icon}</h3>
            <div 
                style={{ backgroundColor: flareClassBackground }}    
                className="rounded-4xl px-2 text-center text-shadow-lg font-semibold"
            >{flareClass} - Class</div>
            <h1 className="text-lg font-bold text-shadow-2xs">{flareTitle}</h1>
            <p className="text-center text-sm text-gray-400">{description}</p>
        </div>
    );
};


export default SolarFlarePowerCard;