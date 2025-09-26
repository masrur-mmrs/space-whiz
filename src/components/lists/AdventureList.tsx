import React from 'react';
import AdventureCard from '../cards/AdventureCard';

interface AdventureListProps {
    adventures: Adventures[];
}

const AdventureList: React.FC<AdventureListProps> = ({ adventures }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-max h-max p-4">
            {
                adventures.map((adventure, i) => 
                    <AdventureCard
                        key={i}
                        adventureTitle={adventure.title}
                        adventureImage={adventure.image}
                        completed={adventure.completed}
                        unlocked={i > 0 ? adventures[i - 1]!.completed : true}
                        recentlyUnlocked={(i > 0 && i < adventures.length - 1) ? !adventures[i + 1]!.completed && adventures[i - 1]!.completed : true}
                    />
                )
            }
        </div>
    );
};


export default AdventureList;