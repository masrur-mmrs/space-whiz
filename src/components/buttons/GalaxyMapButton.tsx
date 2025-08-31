'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

const AdventureButton: React.FC = ({}) => {
    const router = useRouter();
    return (
        <HoverScaleWrapper>
            <button
                onClick={() => router.replace("/")}
                className="bg-gradient-to-r from-sunburst-yellow via-sunset-orange to-sunburst-orange text-white text-shadow-md text-xl font-bold my-10 w-72 h-10 rounded-3xl flex items-center justify-center stellar-yellow-glow"
            >
                🌌 Back to Galaxy Map
            </button>
        </HoverScaleWrapper>
    );
};


export default AdventureButton;