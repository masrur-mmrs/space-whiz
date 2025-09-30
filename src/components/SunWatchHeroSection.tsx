'use client'
import React from 'react';
import { motion } from 'motion/react'

const SunWatchHeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <h1 className="text-8xl">☀️</h1>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#f06bff] via-[#00a6ae] to-[#ffa036] bg-clip-text text-transparent text-shadow-xs">Sun Watch Explorer!</h1>
            <p className="text-lg text-gray-400">Sun Watch - NASA&apos;s Latest Solar Fireworks</p>
        </div>
    );
};


export default SunWatchHeroSection;