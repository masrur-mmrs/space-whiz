import React from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

const AdventureButton: React.FC = ({}) => {
    return (
        <HoverScaleWrapper>
            <button className="bg-gradient-to-r from-sunburst-yellow via-sunset-orange to-sunburst-orange text-white text-shadow-md text-xl font-bold my-3 w-52 h-10 rounded-3xl flex items-center justify-center">
            🚀 Start Adventure
            </button>
        </HoverScaleWrapper>
    );
};


export default AdventureButton;