'use client'
import React from 'react';
import AdventureCard from '../cards/AdventureCard';
import useLocalStorage from '@/hooks/useLocalStorage';


interface AdventureListProps {
    adventuresList: Adventures[];
}

const AdventureList: React.FC<AdventureListProps> = ({ adventuresList }) => {
    const [adventures, setAdventures] = useLocalStorage<Adventures[]>("adventures", adventuresList as Adventures[]);
    
    const markAdventureCompleted = (index: number) => {
        setAdventures((prevAdventures) => 
            prevAdventures.map((adventure, i) => 
                i === index ? { ...adventure, completed: true } : adventure
            )
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-max h-max p-4">
            {
                adventures.map((adventure, i) => 
                    <AdventureCard
                        key={i}
                        index={i}
                        adventureTitle={adventure.title}
                        adventureImage={adventure.image}
                        completed={adventure.completed}
                        unlocked={i > 0 ? adventures[i - 1]!.completed : true}
                        recentlyUnlocked={(i > 0 && i < adventures.length - 1) ? !adventures[i + 1]!.completed && adventures[i - 1]!.completed : true}
                        markAdventureCompleted={markAdventureCompleted}
                    />
                )
            }
        </div>
    );
};


export default AdventureList;