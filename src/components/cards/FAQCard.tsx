import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FAQCard: React.FC<FAQ> = ({iconColor, question, answer}) => {
    return (
        <div className="flex flex-row items-center shadow-md rounded-3xl select-none w-fit max-w-md p-5 gap-4 bg-space-blue">
            <FontAwesomeIcon icon={faQuestion} color={iconColor}/>
            <div className="flex flex-col">
                <h3 className="text-md font-semibold">{question}</h3>
                <p className="text-gray-400">{answer}</p>
            </div>
        </div>
    );
};


export default FAQCard;