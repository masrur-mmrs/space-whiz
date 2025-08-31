"use client"
import React, { useState, useRef, useCallback } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";

interface VideoPlayerProps {
    src: string;
}


const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const playerRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState<number>(0);

    const setPlayerRef = useCallback((player: HTMLVideoElement) => {
        if (!player) return;
        playerRef.current = player;
    }, []);

    const handleTimeUpdate = () => {
        const player = playerRef.current;
        if (!player || !player.duration) return;
        setProgress((player.currentTime / player.duration) * 100)
    };

    return (
        <div className="flex flex-col items-center justify-center max-w-[80vw]">
            <ReactPlayer
                src={src}
                ref={setPlayerRef}
                width="100%"
                height="100%"
                controls={false}
                previewTabIndex={0}
                pip={true}
                playIcon={<FontAwesomeIcon icon={faPlayCircle}/>}
                style={{
                    position: "relative",
                    width: "400px",
                    height: "300px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
                }}
                onTimeUpdate={handleTimeUpdate}
            />
            <ProgressBar value={progress}/>
            <span className="bg-stellar-yellow p-2 mt-4 rounded-3xl cursor-default font-semibold text-shadow-sm">{Math.round(progress)}% watched</span>
        </div>
    );
};


export default VideoPlayer;