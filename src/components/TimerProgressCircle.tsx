'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface TimerProgressCircleProps {
    duration: number;
    size: number;
    strokeWidth: number;
}

const TimerProgressCircle: React.FC<TimerProgressCircleProps> = ({ duration, size, strokeWidth }) => {
    const [timeLeft, setTimeLeft] = useState(duration)

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = (duration - timeLeft) / duration;
    const strokeDashoffset = circumference - progress * circumference;

    useEffect(() => {
        if (timeLeft <= 0) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
            if (prev <= 1) {
                return 0
            }
            return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#6a7282"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
            </svg>
            <svg
                width={size}
                height={size}
                className="absolute inset-0 transform -rotate-90"
            >
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#1142d4"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                    }}
                />
            </svg>
        </div>
    )
}

export default TimerProgressCircle