import React from 'react';

interface SubtitleProps {
    children: string;
}


const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return (
        <h2 className="text-cosmic-blue text-xl font-semibold text-center">{children}</h2>
    );
};


export default Subtitle;