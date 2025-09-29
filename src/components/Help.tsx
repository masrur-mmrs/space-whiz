import React from 'react';
import GalaxyMapButton from './buttons/GalaxyMapButton';
import Navbar from './Navbar';
import HelpAndGuide from './lists/HelpAndGuide';
import FAQList from './lists/FAQList';
import DetailsCard from './cards/DetailsCard';


const Help: React.FC = ({}) => {
    return (
            <div className="flex flex-col items-center gap-4">
            <Navbar title="Help & Guide"/>
            <HelpAndGuide/>
            <FAQList/>
            <div className="max-w-md">
                <DetailsCard
                    title="Need More Help?"
                    description="Our space crew is here to help! Check the settings for language options and accessibility features."
                />
            </div>
            <GalaxyMapButton/>
        </div>
    );
};


export default Help;