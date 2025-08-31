import React from 'react';
import Navbar from './Navbar';
import BadgeCollectionCard from './cards/BadgeCollectionCard';
import adventures from "@/data/adventures.json"
import RewardsList from './lists/RewardsList';
import DetailsCard from './cards/DetailsCard';
import GalaxyMapButton from './buttons/GalaxyMapButton';

const Rewards: React.FC = ({}) => {
    const completedAdventures = adventures.filter(adventure => adventure.completed).length;

    return (
        <div className="flex flex-col items-center justify-center mt-148 sm:mt-108 mb-10 ml-5 mr-5 gap-1.5">
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