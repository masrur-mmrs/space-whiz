'use client'
import React, { useEffect, useState } from 'react';
import SunWatchHeroSection from '@/components/SunWatchHeroSection';
import SpaceFactsCard from '@/components/cards/SpaceFactsCard';
import SolarDataButton from '@/components/buttons/SolarDataButton';
import SolarFlareLevels from '@/components/SolarFlareLevels';
import Navbar from '@/components/Navbar';
import SolarFlares from '@/components/SolarFlares';
import SolarFlareFooter from '@/components/SolarFlareFooter';
import SolarFlareTimeFrame from '@/components/SolarFlareTimeFrame';
import { getSolarFlareData } from '@/app/api/route';

interface SunWatchProps {
    solarFlareData: SolarFlare[];
}

const SunWatch: React.FC<SunWatchProps> = ({ solarFlareData }) => {
    const [startDate, setStartDate] = useState<Date>(new Date("2025-01-01"))
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [filteredFlares, setFilteredFlares] = useState<SolarFlare[]>([])

    const updateSolarData = async () => {
        const filtered = await getSolarFlareData(startDate, endDate)
        setFilteredFlares(filtered)
    }

    useEffect(() => {
        if (solarFlareData.length > 0) {
            const fetchSolarData = async () => {
                const filtered = await getSolarFlareData(startDate, endDate)
                setFilteredFlares(filtered)
            }
            fetchSolarData()
        }
    }, [solarFlareData, startDate, endDate])

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-90 sm:w-6xl mb-8">
            <Navbar/>
            <SunWatchHeroSection/>
            <SolarDataButton getData={updateSolarData}/>
            <SolarFlareTimeFrame
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                filteredFlares={filteredFlares}
            />
            <SpaceFactsCard/>
            <SolarFlareLevels/>
            <SolarFlares solarFlareData={solarFlareData}/>
            <SolarFlareFooter/>
        </div>
    );
};


export default SunWatch;