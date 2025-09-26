import React from 'react';
import HelpCard from '../cards/HelpCard';
import { faGlobe, faPlay, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const HelpAndGuide: React.FC = ({}) => {
    const guides: Guide[] = [
        {
            icon: faPlay,
            iconBackgroundStyles: "bg-[#1142d4]",
            title: "1. Watch",
            description: "Learn about space weather through fun videos",
            gradientStyles: "bg-gradient-to-r from-[#121c4e] to-[#2b1c53]"
        },
        {
            icon: faPuzzlePiece,
            iconBackgroundStyles: "bg-[#ffd966]",
            title: "2. Play",
            description: "Test your knowledge with interactive quizzes and challenges",
            gradientStyles: "bg-gradient-to-r from-[#413a37] to-[#412d32]"
        },
        {
            icon: faGlobe,
            iconBackgroundStyles: "bg-[#36e2e2]",
            title: "3. Unlock",
            description: "Earn badges and unlock new space missions as you progress",
            gradientStyles: "bg-gradient-to-r from-[#193c50] to-[#121d4d]"
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center mx-3 gap-4">
            <h1 className="text-2xl font-bold text-white mb-4">🎮 How to Play</h1>
            {
                guides.map((guide, index) => (
                    <HelpCard
                        key={index}
                        icon={guide.icon}
                        iconBackgroundStyles={guide.iconBackgroundStyles}
                        title={guide.title}
                        description={guide.description}
                        gradientStyles={guide.gradientStyles}
                    />
                ))
            }
        </div>
    );
};


export default HelpAndGuide;