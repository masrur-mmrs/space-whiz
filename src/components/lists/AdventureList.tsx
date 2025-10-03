'use client'
import React, { useEffect } from 'react';
import AdventureCard from '../cards/AdventureCard';
import useLocalStorage from '@/hooks/useLocalStorage';
import adventuresData from '@/data/adventures.json'
import AdventureListSkeleton from '@/loading-skeletons/AdventureListSkeleton';

interface AdventureListProps {
    setNextAdventure: React.Dispatch<React.SetStateAction<string>>
}

const AdventureList: React.FC<AdventureListProps> = ({ setNextAdventure }) => {
    const [adventures, setAdventures, hydrated] = useLocalStorage<Adventures[]>("adventures", adventuresData as Adventures[]);
    
    const markAdventureCompleted = (index: number) => {
        setAdventures((prevAdventures) => 
            prevAdventures.map((adventure, i) => 
                i === index ? { ...adventure, completed: true } : adventure
            )
        )
    }

    useEffect(() => {
        const next = adventures.find((_, i) => recentlyUnlocked(i));
        if (next) {
            setNextAdventure(next.title);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adventures, setNextAdventure]);

    const recentlyUnlocked = (i: number) => {
        if (i > 0 && i < adventures.length - 1) {
            if (adventures[i - 1].completed && !adventures[i + 1]?.completed) {
                return true;
            }
            return false;
        } 
        if (i === 0) {
            if (!adventures[i].completed) {
                return true;
            }
            return false;
        }
        if (i === adventures.length - 1) {
            if (adventures[i - 1].completed) {
                return true;
            }
            return false;
        }
        return false;
    };


    if (!hydrated) return <AdventureListSkeleton/>
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full h-max p-4">
            {
                adventures.map((adventure, i) => 
                    <AdventureCard
                        key={i}
                        index={i}
                        adventureTitle={adventure.title}
                        adventureImage={adventure.image}
                        completed={adventure.completed}
                        unlocked={i > 0 ? adventures[i - 1]!.completed : true}
                        recentlyUnlocked={recentlyUnlocked(i)}
                        markAdventureCompleted={markAdventureCompleted}
                    />
                )
            }
        </div>
    );
};


export default AdventureList;