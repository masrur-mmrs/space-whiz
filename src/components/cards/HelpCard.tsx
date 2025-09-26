import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const HelpCard: React.FC<Guide> = ({icon, title, description, gradientStyles, iconBackgroundStyles}) => {
    return (
        <div className={"flex flex-row items-center shadow-md rounded-3xl select-none w-fit max-w-md p-5 gap-4 " + gradientStyles}>
            <span className={"rounded-full h-20 w-20 p-4 flex items-center justify-center " + iconBackgroundStyles}>
                <FontAwesomeIcon icon={icon} size="3x" color="white"/>
            </span>
            <div className="flex flex-col">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};


export default HelpCard;