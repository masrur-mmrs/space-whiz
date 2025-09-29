import React from 'react';
import Thumbnail from '../Thumbnail';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';
import Link from 'next/link';

interface VideoCardProps {
    video: Video;
    key: number | string;
}


const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
        <HoverScaleWrapper style="w-sm h-60 sm:w-md sm:h-70">
            <Link href={`/mission/${video.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                    className="rounded-2xl bg-space-blue shadow-2xl text-center glow-on-hover w-sm h-60 sm:w-full sm:h-70"
                >
                    <Thumbnail>{video.thumbnail}</Thumbnail>
                    <h2 className="text-xl font-semibold text-shadow-xs w-full bg-space-blue pt-4">{video.title}</h2>
                    <p className="text-md text-gray-500 w-full pb-4 bg-space-blue rounded-b-2xl">{video.subtitle}</p>
                </div>
            </Link>
        </HoverScaleWrapper>
    );
};


export default VideoCard;