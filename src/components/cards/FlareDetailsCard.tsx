import React from 'react';


interface FlareDetailsCardProps {
    detail: string;
}


const FlareDetailsCard: React.FC<FlareDetailsCardProps> = ({ detail }) => {
    return (
        <div className="flex flex-col items-start justify-start p-6 gap-2 rounded-3xl bg-[#2b1c53] w-full">
            <h3 className="font-medium">Cool Detail:</h3>
            <p className="text-sm">{detail}</p>
        </div>
    );
};


export default FlareDetailsCard;