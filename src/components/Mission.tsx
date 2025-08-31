"use client"
import React from 'react';
import VideoPlayer from './VideoPlayer';
import Navbar from './Navbar';
import { useParams } from 'next/navigation';
import LearningOutcomeCard from './cards/LearningOutcomeCard';
import learningOutcomesData from '@/data/learning_outcomes.json'
import videoData from '@/data/videos.json'

const Mission: React.FC = () => {
    const params = useParams<{mission : string}>()
    const mission = params.mission.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    
    const learningOutcomes = learningOutcomesData as LearningOutcomes
    const learningObjective = learningOutcomes[params.mission];

    const parsedVideos = videoData as Mission
    const videos = parsedVideos[params.mission]

    return (
        <div className="flex flex-col items-center justify-center ml-5 mr-5 :w-fit">
            <Navbar title={mission}/>
            <VideoPlayer src={videos.link}/>
            <LearningOutcomeCard learningOutcomes={learningObjective}></LearningOutcomeCard>
        </div>
    );
};

export default Mission;