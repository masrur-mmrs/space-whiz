import React from 'react';
import ToggleCard from '../cards/ToggleCard';
import { faSatellite, faClosedCaptioning, faLanguage} from '@fortawesome/free-solid-svg-icons';
import preferences from "@/data/preferences.json"
import SelectCard from '../cards/SelectCard';

const SettingsList: React.FC = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <ToggleCard
                icon={faSatellite}
                iconColor="blue"
                title="Use Live NASA Data"
                description="Get real-time space weather updates"
                state={preferences.liveData}
            />
            <ToggleCard
                icon={faClosedCaptioning}
                iconColor="violet"
                title="Subtitles"
                description="Show text during videos"
                state={preferences.subtitles}
            />
            <SelectCard
                icon={faLanguage}
                iconColor="yellow"
                title="Language"
                description="Choose your preferred language"
                state={preferences.language as Language}
            />
        </div>
    );
};


export default SettingsList;