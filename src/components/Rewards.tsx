'use client'
import React from 'react';
import Navbar from './Navbar';
import BadgeCollectionCard from './cards/BadgeCollectionCard';
import RewardsList from './lists/RewardsList';
import DetailsCard from './cards/DetailsCard';
import GalaxyMapButton from './buttons/GalaxyMapButton';
import adventuresData from "@/data/adventures.json"
import useLocalStorage from '@/hooks/useLocalStorage';

const Rewards: React.FC = ({}) => {
    const [adventures] = useLocalStorage<Adventures[]>("adventures", adventuresData);
    const completedAdventures = adventures.filter(adventure => adventure.completed).length;

    return (
        <div className="flex flex-col items-center justify-center mb-10 gap-1.5">
            <Navbar title="My Rewards"/>
            <BadgeCollectionCard completed={completedAdventures}/>
            <RewardsList adventures={adventures}/>
            <DetailsCard
                title="Keep Exploring"
                description="Complete more missions to unlock new badges and become the ultimate space explorer!"
            />
            <GalaxyMapButton/>
        </div>
    );
};


export default Rewards;