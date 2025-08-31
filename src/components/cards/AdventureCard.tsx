import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

interface AdventureCardProps {
    adventureTitle: string;
    adventureImage: string;
    completed?: boolean;
    unlocked: boolean;
    recentlyUnlocked: boolean;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ adventureTitle, adventureImage, unlocked, recentlyUnlocked }) => {
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