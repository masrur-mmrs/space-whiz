import React from 'react';


interface BadgeCollectionCardProps {
    completed: number;
}


const BadgeCollectionCard: React.FC<BadgeCollectionCardProps> = ({ completed = 0 }) => {
    return (
        <div className="flex flex-col items-center justify-center content-center bg-space-blue shadow-md p-10 w-full rounded-3xl select-none border transition-transform duration-300">
            <span className="text-4xl">🏆</span>
            <h2 className="text-2xl font-bold my-4">Badge Collection</h2>
            <p className="text-gray-400 mb-4">{completed} of 6 badges earned</p>
            <progress value={completed} max="6" className="w-full mt-2 rounded-full bg-gray-500 h-2"></progress>
        </div>
    );
};


export default BadgeCollectionCard;