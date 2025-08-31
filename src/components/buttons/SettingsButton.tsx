'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

const SettingsButton: React.FC = ({}) => {
    return (
        <HoverScaleWrapper>
            <Link
                href="/settings"
                className="bg-gradient-to-r from-sky-300 to-blue-700 text-white text-shadow-md my-3 w-52 h-10 rounded-3xl flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faCog}/>
                <p className="text-xl font-bold ml-2">Settings</p>
            </Link>
        </HoverScaleWrapper>
    );
};


export default SettingsButton;