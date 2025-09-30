import React from 'react';

const SolarFlareFooter: React.FC = ({}) => {
    return (
        <footer className="flex flex-col items-center justify-center gap-2 w-full">
            <h1 className="text-4xl">🛰️</h1>
            <h2 className="text-lg text-center">Data provided by CCMC NASA&apos;s Space Weather Database Of Notifications, Knowledge, Information (DONKI)</h2>
            <p className="text-gray-400">Keep exploring space, young astronaut! 🚀</p>
        </footer>
    );
};


export default SolarFlareFooter;