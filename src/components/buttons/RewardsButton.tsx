import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

const RewardsButton: React.FC = ({}) => {
    return (
        <HoverScaleWrapper>
            <Link
                href="/rewards"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-shadow-md my-3 w-52 h-10 rounded-3xl flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faAward}/>
                <p className="text-xl font-bold ml-2">My Rewards</p>
            </Link>
        </HoverScaleWrapper>
    );
};


export default RewardsButton;