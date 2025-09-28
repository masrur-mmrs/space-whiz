'use client'
import React from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

const AdventureButton: React.FC = ({}) => {
    return (
        <HoverScaleWrapper>
            <Link
                href={"\\"}
                className="bg-gradient-to-r from-sunburst-yellow via-sunset-orange to-sunburst-orange text-white text-shadow-md text-xl font-bold my-10 w-72 h-10 rounded-3xl flex items-center justify-center stellar-yellow-glow"
            >
                🌌 Back to Galaxy Map
            </Link>
        </HoverScaleWrapper>
    );
};


export default AdventureButton;