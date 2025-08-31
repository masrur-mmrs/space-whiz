"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from './Navbar';
import VideoList from '@/components/lists/VideoList';
import LiveSolarData from '@/components/cards/LiveSolarData';
import missionsData from "@/data/missions.json"

const Adventure: React.FC = () => {
    const params = useParams<{adventure: string}>();
    const mission = params.adventure.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

    const missions = missionsData as Missions
    const videos = missions[params.adventure];

    return (
        <div className="mt-148">
            <Navbar title={`Mission: ${mission}`}/>
            <LiveSolarData/>
            <h1 className="text-3xl font-extrabold text-shadow-xs text-center mb-4 mt-6">🎬 Learn and Explore</h1>
            <VideoList videos={videos as Video[]}/>
            <div className="min-h-20"></div>
        </div>
    );
};

export default Adventure;