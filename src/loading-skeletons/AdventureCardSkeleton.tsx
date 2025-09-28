import React from 'react';
import HoverScaleWrapper from '@/components/wrapper/HoverScaleWrapper';

const AdventureCardSkeleton = () => {
    return (
        <HoverScaleWrapper style="animate-pulse">
            <div
                className="flex flex-col items-center justify-center bg-space-blue shadow-sm p-5 rounded-3xl cursor-pointer select-none border opacity-50 min-h-48 min-w-48"
            >
                <div className={`z-20 absolute ${false ? "hidden" : "block"}`}>
                    <div className="space-x-4 animate-pulse"/>
                </div>
                <div className="text-6xl mb-3 relative space-x-4 animate-pulse"></div>
                <h2 className="text-lg font-bold mt-4 space-x-4 animate-pulse"></h2>
            </div>
        </HoverScaleWrapper>
    );
}

export default AdventureCardSkeleton;