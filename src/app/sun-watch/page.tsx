import React from 'react';
import SunWatch from '@/components/SunWatch';
import { getSolarFlareData } from '@/utils/utils';

const date = new Date()
const endDate = new Date(date.toISOString().slice(0, 10));

const currentYear = new Date().getFullYear();
const startDate = new Date(`${currentYear}-01-01`);

const solarFlareData : SolarFlare[] = await getSolarFlareData(startDate, endDate)

const SunWatchPage: React.FC = () => {
    return (
        <SunWatch solarFlareData={solarFlareData}/>
    );
};


export default SunWatchPage;