import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

const SunWatchCard: React.FC = () => {
    return (
        <HoverScaleWrapper>
            <Link href="/sun-watch">
                <div className="flex flex-col items-center justify-center content-center bg-gradient-to-r from-[#121c4e] to-[#2b1c53] shadow-md p-7.5 w-sm h-60 sm:w-md sm:h-70 rounded-3xl select-none border cursor-pointer glow-on-hover">
                    <FontAwesomeIcon icon={faSatellite} size="2x" color="blue"/>
                    <h2 className="text-2xl font-bold my-4">Sun Watch</h2>
                    <p className="text-gray-400 text-center">Here are the latest fireworks from our Sun, as spotted by NASA in space.</p>
                </div>
            </Link>
        </HoverScaleWrapper>
    );
};


export default SunWatchCard;