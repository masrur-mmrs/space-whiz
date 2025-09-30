import React from 'react';
import ProgressBar from '../ProgressBar';

interface BadgeCollectionCardProps {
    completed: number;
}

const BadgeCollectionCard: React.FC<BadgeCollectionCardProps> = ({ completed = 0 }) => {
    return (
        <div className="flex flex-col items-center justify-center content-center bg-space-blue shadow-md p-10 w-100 sm:w-full rounded-3xl select-none border transition-transform duration-300">
            <span className="text-4xl">🏆</span>
            <h2 className="text-2xl font-bold my-4">Badge Collection</h2>
            <p className="text-gray-400 mb-4">{completed} of 6 badges earned</p>
            <ProgressBar
                value={(completed*100/6)}
                color="#2ecc71"
            />
        </div>
    );
};

export default BadgeCollectionCard;