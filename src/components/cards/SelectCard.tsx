"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SelectLanguage from '../SelectLanguage'

interface SelectCardProps {
    icon: IconProp;
    iconColor: string;
    title: string;
    description: string;
    type: string;
    state: Language
    setPreferences: (value: Preferences | ((val: Preferences) => Preferences)) => void;
}


const SelectCard: React.FC<SelectCardProps> = ({ icon, iconColor, title, description, type, state, setPreferences }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-space-blue shadow-sm p-5 gap-3.5 w-full rounded-3xl select-none border transition-transform ease-in-out duration-300">
            <div className="flex flex-row items-center justify-between w-full">
                <FontAwesomeIcon icon={icon} color={iconColor} size='lg'/>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl font-extrabold">{title}</h1>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div></div>
                <div></div>
            </div>
            <SelectLanguage 
                type={type} 
                state={state} 
                setPreferences={setPreferences}
            />
        </div>
    );
};


export default SelectCard;