import React from 'react';
import RewardCard from '../cards/RewardCard';


interface RewardsListProps {
    adventures: Adventures[];
}


const RewardsList: React.FC<RewardsListProps> = ({ adventures }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-max h-max p-4">
            {
                adventures.map((adventure, i) => 
                    <RewardCard
                        key={i}
                        adventureTitle={adventure.title}
                        adventureImage={adventure.image}
                        completed={adventure.completed}
                        unlocked={i > 0 ? adventures[i - 1]!.completed : true}
                    />
                )
            }
        </div>
    );
};


export default RewardsList;