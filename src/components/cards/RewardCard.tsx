import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

interface RewardCardProps {
    adventureTitle: string;
    adventureImage: string;
    completed?: boolean;
    unlocked: boolean;
}

const RewardCard: React.FC<RewardCardProps> = ({ adventureTitle, adventureImage, unlocked }) => {
    return (
        <HoverScaleWrapper>
            <Link
                aria-disabled={unlocked}
                href={`/adventures/${adventureTitle.toLowerCase().replace(/\s+/g, '-')}`}
                className={`
                    flex flex-col items-center justify-center content-center bg-space-blue shadow-sm p-5 rounded-3xl cursor-pointer select-none border glow min-h-48
                    ${(unlocked) ? "" : "grayscale opacity-50 !cursor-not-allowed !pointer-events-none"}
                `}
            >
                <div className={`${unlocked ? "hidden" : "block"}`}>
                    <FontAwesomeIcon icon={faLock} size="2x"  />
                </div>
                <div className={`${unlocked ? "text-6xl mb-3 relative" : "hidden"}`}>{adventureImage}</div>
                <h2 className="text-lg font-bold mt-4">{adventureTitle}</h2>
                <h3 className={`${unlocked ? "text-green-500 font-medium" : "hidden"}`}>✨ Unlocked</h3>
            </Link>
        </HoverScaleWrapper>
    );
};


export default RewardCard;