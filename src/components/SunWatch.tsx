'use client'
import React, { useState } from 'react';
import SunWatchHeroSection from '@/components/SunWatchHeroSection';
import SpaceFactsCard from '@/components/cards/SpaceFactsCard';
import SolarDataButton from '@/components/buttons/SolarDataButton';
import SolarFlareLevels from '@/components/SolarFlareLevels';
import Navbar from '@/components/Navbar';
import SolarFlares from '@/components/SolarFlares';
import SolarFlareFooter from '@/components/SolarFlareFooter';
import SolarFlareTimeFrame from '@/components/SolarFlareTimeFrame';
import { formatDate, getSolarFlareData } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';


const SunWatch: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const [startDate, setStartDate] = useState<Date>(new Date(`${currentYear}-${currentMonth + 1}-01`));
    const [endDate, setEndDate] = useState<Date>(new Date());

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    const { data: filteredFlares = [], isFetching, refetch } = useQuery({
        queryKey: ["solarFlareData", start, end],
        queryFn: () => getSolarFlareData(start, end),
    })

    const updateSolarData = async () => {
        refetch();
    }

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
            {isFetching ? <p>Loading Solar Flare Data...</p> : <SolarFlares solarFlareData={filteredFlares}/>}
            <SolarFlareFooter/>
        </div>
    );
};


export default SunWatch;