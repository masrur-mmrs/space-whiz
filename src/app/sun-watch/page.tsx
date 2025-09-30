import React from 'react';
import SunWatch from '@/components/SunWatch';
import { getSolarFlareData } from '@/utils/utils';

const date = new Date()
const endDate = date.toISOString().slice(0, 10);

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const startDate = `${currentYear}-${currentMonth + 1}-01`;

const solarFlareData : SolarFlare[] = await getSolarFlareData(startDate, endDate)

const SunWatchPage: React.FC = () => {
    return (
        <SunWatch solarFlareData={solarFlareData}/>
    );
};


export default SunWatchPage;