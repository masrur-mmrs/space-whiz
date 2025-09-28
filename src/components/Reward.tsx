'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import rewardsData from '@/data/rewards.json'
import useLocalStorage from '@/hooks/useLocalStorage';
import BadgeCard from './cards/BadgeCard';
import GalaxyMapButton from './buttons/GalaxyMapButton';

const Reward: React.FC = ({}) => {
    const params = useParams<{reward: string}>()
    const level = params.reward
    const [rewards] = useLocalStorage<Rewards>("rewards", rewardsData);
    const reward = rewards[level]

    console.log(params.reward)
    return (
        <div className="flex flex-col items-center justify-center gap-8 mt-10 mx-auto max-w-[90vw]">
            <BadgeCard
                emoji={reward.emoji}
                badge={reward.badge}
                words={reward.words}
            />
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-space-blue border-1 w-full sm:w-md p-6">
                <h2 className="text-2xl font-semibold text-shadow-2xs">🌟 Amazing Work!</h2>
                <p className="text-wrap text-gray-400">You&apos;ve earned the <span className="text-sunburst-orange font-semibold text-shadow-2xs">{reward.badge}</span> badge! Keep exploring the galaxy to unlock more missions and discover the wonders of space weather</p>
            </div>
            <GalaxyMapButton/>
        </div>
    );
};


export default Reward;