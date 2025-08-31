import React from 'react';

interface DetailsCardProps {
    title: string;
    description: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, description}) => {
    return (
        <div className="flex flex-col items-center justify-center content-center bg-gradient-to-r from-[#3c264b] to-[#2e1d52] shadow-md mx-7.5 p-7.5 w-fit rounded-3xl select-none border transition-transform duration-300">
            <span className="text-4xl">🚀</span>
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            <p className="text-gray-400 text-center">{description}</p>
        </div>
    );
};


export default DetailsCard;