import React from 'react';
import ProgressBar from '@/components/ProgressBar';


const VideoPlayerSkeleton: React.FC = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center animate-pulse">
            <div
                style={{
                    position: "relative",
                    width: "400px",
                    height: "300px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                    backgroundColor: "black"
                }}
            />
            <ProgressBar value={0}/>
            <span className="bg-stellar-yellow p-2 mt-4 rounded-3xl cursor-default font-semibold text-shadow-sm animate-pulse">0% watched</span>
        </div>
    );
};


export default VideoPlayerSkeleton;