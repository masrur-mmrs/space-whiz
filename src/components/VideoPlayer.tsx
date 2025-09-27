"use client"
import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Player from "next-video/player";
import ProgressBar from "./ProgressBar";

interface VideoPlayerProps {
    src: string;
    level: string;
    markVideoCompleted: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, level, markVideoCompleted }) => {
    const [progress, setProgress] = useState<number>(0);
    const router = useRouter();
    const playerRef = useRef<HTMLVideoElement | null>(null);

    const setPlayerRef = useCallback((player: HTMLVideoElement) => {
        if (!player) return;
        playerRef.current = player;
    }, []);

    const handleTimeUpdate = () => {
        const player = playerRef.current;
        if (!player || !player.duration) return;
        setProgress((player.currentTime / player.duration) * 100)
    };

    const handleVideoEnd = useCallback(() => {
        markVideoCompleted();
        router.replace(`/quiz/${level}`);
    }, [markVideoCompleted, router, level]);

    return (
        <div className="flex flex-col items-center justify-center">
            <Player
                src={src}
                ref={setPlayerRef}
                style={{
                    position: "relative",
                    width: "400px",
                    height: "300px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
                }}
                controls
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
            />
            <ProgressBar value={progress}/>
            <span className="bg-stellar-yellow p-2 mt-4 rounded-3xl cursor-default font-semibold text-shadow-sm">{Math.round(progress)}% watched</span>
        </div>
    );
};

export default VideoPlayer;