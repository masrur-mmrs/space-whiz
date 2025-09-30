import React from 'react';
import { getPowerLevel, getPowerLevelDetails } from '@/utils/utils';
import FlareTimePlaceCard from './FlareTimePlaceCard';
import { faClock, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import FlareDetailsCard from './FlareDetailsCard';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';


interface SolarFlareCardProps {
    flrID: string;
    beginTime: string;
    classType: string;
    sourceLocation: string;
    note?: string;
    link: string;
    linkedEvents?: LinkedEvent[] | null;
}


const SolarFlareCard: React.FC<SolarFlareCardProps> = ({
    flrID,
    beginTime,
    classType,
    sourceLocation,
    note,
    link
}) => {
    const powerLevel = getPowerLevel(classType);
    const [powerLevelTitle, powerLevelIcon, powerLevelBg] = getPowerLevelDetails(powerLevel);
    const flareId = flrID.split("-")[3] + "-" + flrID.split("-")[4]

    return (
        <HoverScaleWrapper 
            scale={1.025}
            style="h-full"
        >
            <div className="flex flex-col items-center bg-space-blue rounded-3xl p-4 border-1 border-stellar-violet/50 gap-4 h-full">
                <div className="flex flex-row items-end justify-between gap-4 w-full mt-2">
                    <div className="inline-flex items-center justify-center gap-1">
                        <h2 className="text-4xl">{powerLevelIcon}</h2>
                        <div className="flex flex-col items-start justify-center gap-1">
                            <h2 className="text-2xl font-semibold">{powerLevelTitle}</h2>
                            <h3
                                style={{ backgroundColor: powerLevelBg }}
                                className="rounded-4xl px-2 text-center text-shadow-lg font-semibold"
                            >
                                {classType}
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col text-sm text-right">
                        <p className="text-gray-400">Space Event#</p>
                        <p className="text-cyan-400 font-semibold">{flareId}</p>
                    </div>
                </div>
                <FlareTimePlaceCard
                    icon={faClock}
                    iconColor="#f06aff"
                    title="When it happened:"
                    time={beginTime}
                />
                <FlareTimePlaceCard
                    icon={faLocationDot}
                    iconColor="#00d3f2"
                    title="Where it happened:"
                    location={sourceLocation}
                />
                {note!.length>0 ? <FlareDetailsCard detail={note!}/>: <div className="h-full"></div>}
                <Link
                    href={link}
                    target='_blank'
                    className="inline-block border-2 border-cosmic-blue hover:bg-cosmic-blue p-2 rounded-3xl mb-2 w-50 text-center float-end"
                >
                <FontAwesomeIcon icon={faRocket}/>
                Learn More at NASA!
                </Link>
            </div>
        </HoverScaleWrapper>
    );
};


export default SolarFlareCard;