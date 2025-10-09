import React from 'react';
import ToggleCard from '../cards/ToggleCard';
import { faSatellite, faClosedCaptioning, faLanguage} from '@fortawesome/free-solid-svg-icons';
import preferencesData from "@/data/preferences.json"
import SelectCard from '../cards/SelectCard';
import useLocalStorage from '@/hooks/useLocalStorage';

const SettingsList: React.FC = ({}) => {
    const [preferences, setPreferences, hydrated] = useLocalStorage<Preferences>("preferences", preferencesData as Preferences)
    if (!hydrated) return <div>Loading...</div>;
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <ToggleCard
                icon={faSatellite}
                iconColor="blue"
                title="Use Live NASA Data"
                description="Get real-time space weather updates"
                type="liveData"
                state={preferences!.liveData}
                setPreferences={setPreferences}
            />
            <ToggleCard
                icon={faClosedCaptioning}
                iconColor="violet"
                title="Subtitles"
                description="Show text during videos"
                type="subtitles"
                state={preferences!.subtitles}
                setPreferences={setPreferences}
            />
            <SelectCard
                icon={faLanguage}
                iconColor="yellow"
                title="Language"
                description="Choose your preferred language"
                type="language"
                state={preferences!.language}
                setPreferences={setPreferences}
            />
        </div>
    );
};


export default SettingsList;