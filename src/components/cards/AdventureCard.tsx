import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import videoData from '@/data/videos.json'
import useLocalStorage from '@/hooks/useLocalStorage';

interface AdventureCardProps {
    index: number;
    adventureTitle: string;
    adventureImage: string;
    completed?: boolean;
    unlocked: boolean;
    recentlyUnlocked: boolean;
    markAdventureCompleted: (index: number) => void;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ index, adventureTitle, adventureImage, unlocked, recentlyUnlocked, markAdventureCompleted }) => {
    const [missions] = useLocalStorage<Missions>("videos", videoData as Missions);

    useEffect(() => {
        let completedMissions: number = 0;
        const adventure = adventureTitle.replaceAll(" ", "-").toLocaleLowerCase()
        for (const chapter in missions![adventure]) {
            if (missions![adventure][chapter].completed) {
                // console.log("Completed:", chapter);
                completedMissions++;
            }
        }
        if (completedMissions === 3) {
            // console.log("Marked", index);
            markAdventureCompleted(index);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [missions, index]);

    return (
        <HoverScaleWrapper>
            <Link
                href={`/adventures/${adventureTitle.toLowerCase().replace(/\s+/g, '-')}`}
                className={`
                    flex flex-col items-center justify-center bg-space-blue shadow-sm p-5 rounded-3xl cursor-pointer select-none border  min-h-48
                    ${(unlocked) ? "" : "grayscale cursor-not-allowed! opacity-50 !pointer-events-none"}
                    ${(recentlyUnlocked)? "glow": ""}
                `}
            >
                <div className={`z-20 absolute ${unlocked ? "hidden" : "block"}`}>
                    <FontAwesomeIcon icon={faLock} size="2x"  />
                </div>
                <div className="text-6xl mb-3 relative">{adventureImage}</div>
                <h2 className="text-lg font-bold mt-4">{adventureTitle}</h2>
            </Link>
        </HoverScaleWrapper>
    );
};


export default AdventureCard;