import React from 'react';
import TimerProgressCircle from './TimerProgressCircle';
import { motion } from 'motion/react'

interface NextQuestionProps {
    questionNumber: number;
}

const NextQuestion: React.FC<NextQuestionProps> = ({ questionNumber }) => {
    return (
        <motion.div 
            className="flex flex-row items-center justify-center mt-5 gap-2"
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
            }}
        >
            <p className="text-gray-400 font-semibold text-lg">{(questionNumber<3)?"Next question in ": "Results in "}</p>
            <TimerProgressCircle
                size={25}
                strokeWidth={5}
                duration={3}
            />
        </motion.div>
    );
};

export default NextQuestion;