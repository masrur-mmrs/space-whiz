"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import VideoPlayer from './VideoPlayer';
import Navbar from './Navbar';
import LearningOutcomeCard from './cards/LearningOutcomeCard';
import learningOutcomesData from '@/data/learning_outcomes.json'
import videoData from '@/data/videos.json'
import useLocalStorage from '@/hooks/useLocalStorage';

const Mission: React.FC = () => {
    const params = useParams<{mission : string, adventure: string}>()
    const [adventure, setAdventure] = useState<string>("");
    const [video, setVideo] = useState<Mission>({ link: "", completed: false });
    const mission = params.mission.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    
    const learningOutcomes = learningOutcomesData as LearningOutcomes
    const learningObjective = learningOutcomes[params.mission];

    const [parsedVideos, setParsedVideos] = useLocalStorage<Missions>("videos", videoData as Missions);

    useEffect(() => {
        for (const adventure in parsedVideos) {
            for (const mission in parsedVideos[adventure]) {
                if (mission === params.mission) {
                    setAdventure(adventure)
                    setVideo(parsedVideos[adventure][params.mission]);
                    break;
                }
            }
        }
    }, [parsedVideos, params.mission, video]);

    const markVideoCompleted = () => {
        setParsedVideos((prevVideos) => ({
            ...prevVideos,
            [adventure]: {
            ...prevVideos[adventure],
            [params.mission]: {
                ...prevVideos[params.adventure][params.mission],
                completed: true
            }
            }
        }))
        console.log("New Videos:", parsedVideos);
    }

    return (
        <div className="flex flex-col items-center justify-center ml-5 mr-5 :w-fit">
            <Navbar title={mission}/>
            <VideoPlayer src={video?.link || ""} level={params.mission} markVideoCompleted={markVideoCompleted}/>
            <LearningOutcomeCard learningOutcomes={learningObjective}></LearningOutcomeCard>
        </div>
    );
};

export default Mission;