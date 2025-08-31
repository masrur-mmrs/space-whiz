"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";

interface ThumbnailProps {
  children: React.ReactNode;
}

const iconVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0, rotate: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: [0, -8, 8, 0],
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const glowVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 0.55,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="flex flex-col items-center justify-center relative w-full h-[80%] bg-gradient-to-br from-[#1642d5] to-[#9442ef] rounded-t-2xl cursor-pointer overflow-hidden"
    >
        <div className="absolute text-7xl select-none pointer-events-none">
            {children}
        </div>
        <motion.div
                aria-hidden
                className="absolute w-28 h-28 rounded-full pointer-events-none"
                style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)"
                }}
                variants={glowVariants}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
        />
        <motion.div
                className="absolute z-10 flex items-center justify-center"
                variants={iconVariants}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                whileTap={{ scale: 0.95 }}
        >
            <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-white text-6xl drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
            />
        </motion.div>
    </motion.span>
  );
};

export default Thumbnail;
