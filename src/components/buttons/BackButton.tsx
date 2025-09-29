'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = ({}) => {
    const router = useRouter();
    return (
        <HoverScaleWrapper scale={1.15}>
            <button
                onClick={router.back}
                className="bg-gradient-to-r from-violet-700 via-violet-500 to-fuchsia-400 p-1 rounded-2xl text-shadow-xs flex items-center justify-center cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
            </button>
        </HoverScaleWrapper>
    );
};


export default BackButton;