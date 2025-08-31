import React from 'react';

interface TitleProps {
    children: string;
}

const Title: React.FC<TitleProps> = ({children}) => {
    return (
        <h1 className="text-stellar-yellow text-3xl font-extrabold text-center w-full">{children}</h1>
    );
};

export default Title;