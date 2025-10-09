import React from 'react';
import SunWatch from '@/components/SunWatch';
import { getSolarFlareData } from '@/utils/utils';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const SunWatchPage: React.FC = async () => {
    const queryClient = new QueryClient();
    
    const date = new Date()
    const endDate = date.toISOString().slice(0, 10);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const startDate = `${currentYear}-${currentMonth + 1}-01`;

    await queryClient.prefetchQuery({
        queryKey: ["solarFlareData", startDate, endDate],
        queryFn: () => getSolarFlareData(startDate, endDate)
    })

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <SunWatch/>
        </HydrationBoundary>
    );
};


export default SunWatchPage;