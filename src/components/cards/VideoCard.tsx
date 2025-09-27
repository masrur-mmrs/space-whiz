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
        <HoverScaleWrapper style="w-full h-full">
            <Link href={`/mission/${video.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                    className="w-full h-52 rounded-2xl bg-space-blue shadow-2xl text-center glow-on-hover"
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