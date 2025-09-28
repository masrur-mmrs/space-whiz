import React from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

interface AdventureButtonProps {
    adventure: string;
}

const AdventureButton: React.FC<AdventureButtonProps> = ({ adventure }) => {
    return (
        <HoverScaleWrapper>
            <Link 
                href={`/adventures/${adventure.replaceAll(" ", "-").toLowerCase()}`}
                className="bg-gradient-to-r from-sunburst-yellow via-sunset-orange to-sunburst-orange text-white text-shadow-md text-xl font-bold my-3 w-52 h-10 rounded-3xl flex items-center justify-center"
            >
            🚀 Start Adventure
            </Link>
        </HoverScaleWrapper>
    );
};


export default AdventureButton;