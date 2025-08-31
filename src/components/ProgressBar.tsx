"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";

interface ProgressBarProps {
    value: number;
    height?: string;
    color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  height = "8px", 
  color = "#ffd966"
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(value);
    }, [value]);

    return (
        <div 
            className="w-full bg-gray-500 rounded-full overflow-hidden mt-8" 
            style={{ height }}
        >
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6 }}
                style={{ backgroundColor: color, height: "100%", borderRadius: "25px" }}
            />
        </div>
    );
};

export default ProgressBar;