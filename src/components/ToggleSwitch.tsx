"use client";

import React from "react";
import { motion } from "motion/react";

interface ToggleSwitchProps {
    isOn: boolean;
    setIsOn: ((state: boolean) => void);
}

const ToggleSwitch : React.FC<ToggleSwitchProps> = ({ isOn, setIsOn}) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                isOn ? "bg-cosmic-blue" : "bg-gray-400"
                }`}
                onClick={() => setIsOn(!isOn)}
            >
                <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{
                    x: isOn ? 24 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30,
                }}
                />
            </div>
        </div>
    );
}

export default ToggleSwitch;