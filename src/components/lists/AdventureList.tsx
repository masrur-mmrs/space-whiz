'use client'
import React from 'react';
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

    const recentlyUnlocked = (i: number) => {
        if (i > 0 && i < adventures.length) {
            if (adventures[i-1].completed && !adventures[i + 1].completed) {
                setNextAdventure(adventures[i].title)
                return true;
            } else {
                return false;
            }
        } else if (i === 0) {
            if (!adventures[i].completed) {
                setNextAdventure(adventures[i].title)
                return true;
            } else {
                return false;
            }
        }  else if (i === adventures.length) {
            if (adventures[i-1].completed) {
                setNextAdventure(adventures[i].title)
                return true
            } else {
                return false
            }
        } else {
            setNextAdventure(adventures[i].title)
            return false;
        }
    }

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