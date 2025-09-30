import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { formatTime, translateLocation } from '@/utils/utils';

interface FlareTimePlaceCardProps {
    icon: IconProp
    iconColor: string;
    title: string;
    time?: string;
    location?: string;
}

const FlareTimePlaceCard: React.FC<FlareTimePlaceCardProps> = ({ title, icon, iconColor, time, location }) => {
    return (
        <div className="flex flex-row items-center justify-start p-4 gap-2 rounded-3xl bg-cyan-800 w-full">
            <FontAwesomeIcon 
                icon={icon} 
                style={{ color: iconColor }}
                size="xl"
            />
            <div className="flex flex-col items-start">
                <p className="text-md font-medium">{title}</p>
                {time && <p className="text-sm">{formatTime(time)}</p>}
                {location && <p className="text-sm">{translateLocation(location)}</p>}
            </div>
        </div>
    );
};


export default FlareTimePlaceCard;