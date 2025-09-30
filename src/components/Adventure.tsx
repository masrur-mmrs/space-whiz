"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from './Navbar';
import VideoList from '@/components/lists/VideoList';
import SunWatchCard from '@/components/cards/SunWatchCard';
import missionsData from "@/data/missions.json"

interface Missions {
  [key: string]: Video[];
}

const Adventure: React.FC = () => {
    const params = useParams<{adventure: string}>();
    const mission = params.adventure.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

    const missions = missionsData as Missions
    const videos = missions[params.adventure];

    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar title={`Mission: ${mission}`}/>
            <SunWatchCard/>
            <h1 className="text-3xl font-extrabold text-shadow-xs text-center mb-4 mt-6">🎬 Learn and Explore</h1>
            <VideoList videos={videos as Video[]}/>
            <div className="min-h-20"></div>
        </div>
    );
};

export default Adventure;