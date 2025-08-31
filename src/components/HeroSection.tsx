import React from 'react';
import Title from './Title';
import HeroImage from './HeroImage';
import SpaceWhizz from "../../public/spacewhizz.png"
import Subtitle from './Subtitle';

const HeroSection: React.FC = () => {
    return (
        <>
            <HeroImage imageSrc={SpaceWhizz}/>
            <Title>Galaxy Map</Title>
            <Subtitle>Choose your space mission!</Subtitle>
        </>
    );
};


export default HeroSection;