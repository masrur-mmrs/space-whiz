import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpaceFactsCard: React.FC = ({}) => {
    return (
        <div className="flex flex-col row items-center justify-center p-4 rounded-3xl gap-4 border-2 border-stellar-violet glass-card">
            <header className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} style={{color: "#f06aff"}}/>
                <h1 className="text-stellar-violet">Cool Space Facts!</h1>
            </header>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex flex-col p-8 rounded-3xl bg-[#121c4e] gap-4 flex-1">
                    <h2 className="text-2xl">☀️</h2>
                    <p className="text-wrap">Solar flares are like giant fireworks on the Sun that can be millions of times more powerful than atomic bombs!</p>
                </div>
                <div className="flex flex-col p-8 rounded-3xl bg-[#2a1c53] gap-4 flex-1">
                    <h2 className="text-2xl">⚡️</h2>
                    <p className="text-wrap">The biggest flares (X-class) can affect satellites, radio signals, and even create beautiful auroras!</p>
                </div>
            </div>
        </div>
    );
};


export default SpaceFactsCard;