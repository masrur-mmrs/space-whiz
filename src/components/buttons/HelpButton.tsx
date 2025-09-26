import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

const HelpButton: React.FC = ({}) => {
    return (
        <HoverScaleWrapper>
            <Link
                href="/help"
                className="bg-gradient-to-r from-fuchsia-400 to-violet-700 text-white text-shadow-md my-3 w-52 h-10 rounded-3xl flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faQuestionCircle}/>
                <p className="text-xl font-bold ml-2">Help</p>
            </Link>
        </HoverScaleWrapper>
    );
};


export default HelpButton;