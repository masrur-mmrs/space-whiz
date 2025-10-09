'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import BadgeCard from './cards/BadgeCard';
import GalaxyMapButton from './buttons/GalaxyMapButton';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';
import rewardsData from '@/data/rewards.json'

const Reward: React.FC = ({}) => {
    const params = useParams<{reward: string}>()
    const [confettiAnimation, setConfettiAnimation] = useState<boolean>(true);
    const level = params.reward
    const [rewards] = useLocalStorage<Rewards>("rewards", rewardsData);
    const reward = rewards![level]

    useEffect(() => {
        const cleanupConfetti = () => {
            setTimeout(() => {
                setConfettiAnimation(false);
            }, 3000);
        }
        return () => cleanupConfetti();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-8 mt-10 mx-auto max-w-[90vw]">
            {confettiAnimation && <Realistic autorun={{ speed: 0.3, duration: 3000 }}/>}
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