import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
    imageSrc: StaticImageData;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageSrc }) => {
    return (
        <Image
            src={imageSrc}
            alt="Space Whizz Logo"
            width={250}
            height={250}
            priority
        />
    );
};


export default HeroImage;