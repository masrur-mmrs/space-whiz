import React from 'react';
import VideoCard from '../cards/VideoCard';


interface VideoListProps {
    videos: Video[]
}


const VideoList: React.FC<VideoListProps> = ({ videos }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-18 my-8">
            {videos.map(((video, index) => 
                <VideoCard key={index} video={video}/>
            ))}
        </div>
    );
};


export default VideoList;