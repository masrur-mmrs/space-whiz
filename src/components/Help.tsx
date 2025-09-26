import React from 'react';
import GalaxyMapButton from './buttons/GalaxyMapButton';
import Navbar from './Navbar';
import HelpAndGuide from './lists/HelpAndGuide';
import FAQList from './lists/FAQList';
import DetailsCard from './cards/DetailsCard';


const Help: React.FC = ({}) => {
    return (
            <div className="flex flex-col items-center mt-138 sm:mt-172 ml-5 gap-4">
            <Navbar title="Help & Guide"/>
            <HelpAndGuide/>
            <FAQList/>
            <div className="w-md">
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