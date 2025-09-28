import React from 'react';
import AdventureCardSkeleton from './AdventureCardSkeleton';
import adventuresData from '@/data/adventures.json'


const AdventureListSkeleton: React.FC = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-max h-max p-4">
            {adventuresData.map((adventure, index) => (<AdventureCardSkeleton key={index}/>))}   
        </div>
    );
};


export default AdventureListSkeleton;