"use client"
import React from 'react';
import Navbar from './Navbar';
import SettingsList from './lists/SettingsList';
import DetailsCard from './cards/DetailsCard';
import GalaxyMapButton from './buttons/GalaxyMapButton';

const Settings: React.FC = ({}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Navbar title="Settings"/>
            <SettingsList/>
            <div className="max-w-md">
                <DetailsCard
                    title="SpaceWhiz v1.0"
                    description="Teaching kids about space weather through fun stories and interactive puzzles!"
                />
            </div>
            <GalaxyMapButton/>
        </div>
    );
};


export default Settings;