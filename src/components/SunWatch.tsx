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
import { formatDate, getSolarFlareData } from '@/utils/utils';

interface SunWatchProps {
    solarFlareData: SolarFlare[];
}

const SunWatch: React.FC<SunWatchProps> = ({ solarFlareData }) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const [startDate, setStartDate] = useState<Date>(new Date(`${currentYear}-${currentMonth + 1}-01`))
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [filteredFlares, setFilteredFlares] = useState<SolarFlare[]>([])

    const updateSolarData = async () => {
        const start = formatDate(startDate);
        const end = formatDate(endDate);
        const filtered = await getSolarFlareData(start, end)
        console.log(filtered)
        setFilteredFlares(filtered)
    }

    useEffect(() => {
        if (solarFlareData.length > 0) {
            const fetchSolarData = async () => {
                const start = formatDate(startDate);
                const end = formatDate(endDate);
                const filtered = await getSolarFlareData(start, end)
                console.log(filtered)
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