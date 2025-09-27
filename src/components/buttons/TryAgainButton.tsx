import React from 'react';
import { useRouter } from 'next/navigation';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';

interface TryAgainButtonProps {
    level: string;
    resetQuiz: () => void;
}


const TryAgainButton: React.FC<TryAgainButtonProps> = ({level, resetQuiz}) => {
    const router = useRouter();
    
    const handleClick = () => {
        resetQuiz();
        router.replace(`/quiz/${level}`)
    }

    return (
        <HoverScaleWrapper>
            <button
                onClick={handleClick}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-shadow-md my-3 w-52 h-10 rounded-3xl flex items-center justify-center cursor-pointer"
            >
                Try Again
            </button>
        </HoverScaleWrapper>
    );
};


export default TryAgainButton;