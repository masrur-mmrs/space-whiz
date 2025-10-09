import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';
import { RootState } from '@/redux/store';

const SunWatchCard: React.FC = () => {
    const realTimeDataEnabled = useSelector((state: RootState) => state.realTimeDataSlice.currentState);
    return (
        <HoverScaleWrapper>
            <Link 
                href="/sun-watch"
                onClick={(e) => {
                    if (!realTimeDataEnabled) e.preventDefault();
                }}
            >
                <div className={`flex flex-col items-center justify-center content-center bg-gradient-to-r from-[#121c4e] to-[#2b1c53] shadow-md p-7.5 w-sm h-60 sm:w-md sm:h-70 rounded-3xl select-none border ${realTimeDataEnabled?"cursor-pointer glow-on-hover":"cursor-not-allowed grayscale-75 opacity-50"}`}>
                    <FontAwesomeIcon icon={faSatellite} size="2x" color="blue"/>
                    <h2 className="text-2xl font-bold my-4">Sun Watch</h2>
                    <p className="text-gray-400 text-center">Here are the latest fireworks from our Sun, as spotted by NASA in space.</p>
                </div>
            </Link>
        </HoverScaleWrapper>
    );
};


export default SunWatchCard;