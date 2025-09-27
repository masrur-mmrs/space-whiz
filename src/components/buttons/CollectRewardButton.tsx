import React from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

interface CollectRewardButtonProps {
    level: string;
}


const CollectRewardButton: React.FC<CollectRewardButtonProps> = ({level}) => {
    return (
        <HoverScaleWrapper>
            <Link
                href={`/reward/${level}`}
                className="bg-gradient-to-r from-sunburst-yellow via-sunset-orange to-sunburst-orange text-white text-shadow-md text-xl font-bold my-10 w-72 h-10 rounded-3xl flex items-center justify-center stellar-yellow-glow"
            >
                🏆 Collect Reward
            </Link>
        </HoverScaleWrapper>
    );
};


export default CollectRewardButton;