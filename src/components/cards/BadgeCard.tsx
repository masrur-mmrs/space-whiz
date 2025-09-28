import React from 'react';


interface BadgeCardProps {
    emoji: string;
    badge: string;
    words: string;
}


const BadgeCard: React.FC<BadgeCardProps> = ({ emoji, badge, words }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl h-full w-full p-12 glow bg-gradient-to-br border-1 border-sunburst-yellow from-[#3f3938] to-[#141e4c]">
            <h1 className="text-6xl subpixel-antialiased text-center">{emoji}</h1>
            <h2 className="text-4xl font-bold text-sunburst-yellow text-shadow-xs text-center">Badge Unlocked</h2>
            <h3 className="text-2xl font-semibold text-shadow-2xs text-center">{badge}</h3>
            <p className="text-gray-400 text-center">{words}</p>
        </div>
    );
};


export default BadgeCard;