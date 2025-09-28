'use client'
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import AdventureButton from './buttons/AdventureButton';
import AdventureList from './lists/AdventureList';
import RewardsButton from './buttons/RewardsButton';
import SettingsButton from './buttons/SettingsButton';
import HelpButton from './buttons/HelpButton';

const App: React.FC = ({}) => {
    const [nextAdventure, setNextAdventure] = useState<string>("");
    return (
        <div className="flex flex-col items-center justify-center absolute z-10 gap-1 mt-148">
            <HeroSection/>
            <AdventureButton adventure={nextAdventure}/>
            <AdventureList setNextAdventure={setNextAdventure}/>
            <RewardsButton/>
            <SettingsButton/>
            <HelpButton/>
            <footer className="min-h-5"></footer>
        </div>
    );
};


export default App;