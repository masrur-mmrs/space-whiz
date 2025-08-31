import React from 'react';
import Title from './Title';
import BackButton from './buttons/BackButton';

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className="flex flex-row items-center justify-start w-full p-4 mt-10 mb-3">
            <BackButton/>
            <div className="w-[75%] sm:w-[85%]">
                <Title>{title}</Title>
            </div>
        </nav>
    );
};


export default Navbar;