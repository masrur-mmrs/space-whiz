'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ToggleSwitch from '../ToggleSwitch';


interface ToggleCardProps {
    icon: IconProp;
    iconColor: string;
    title: string;
    description: string;
    type: string
    state: boolean;
    setPreferences: (value: Preferences | ((val: Preferences) => Preferences)) => void;
}


const ToggleCard: React.FC<ToggleCardProps> = ({ title, icon, iconColor, description, type, state, setPreferences }) => {
    const [isOn, setIsOn] = useState(state);

    const handleToggle = (state: boolean) => {
        setIsOn(state);
        setPreferences((prev) => {
            return {
                ...prev,
                [type]: state
            }
        })
    }
    
    return (
        <div className="flex flex-row items-center justify-between bg-space-blue shadow-sm p-5 gap-3.5 w-full rounded-3xl select-none border transition-transform ease-in-out duration-300">
            <FontAwesomeIcon icon={icon} color={iconColor} size='lg'/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-extrabold">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="float-end">
                <ToggleSwitch isOn={isOn} setIsOn={handleToggle}/>
            </div>
        </div>
    );
};


export default ToggleCard;