import React from 'react';
import CollectRewardButton from '../buttons/CollectRewardButton';
import TryAgainButton from '../buttons/TryAgainButton';

interface QuizCompleteCardProps {
    level: string;
    correctAnswers: number;
    resetQuiz: () => void;
}

const QuizCompleteCard: React.FC<QuizCompleteCardProps> = ({level, correctAnswers, resetQuiz}) => {
    const Header = () => {
        if (correctAnswers >= 3) {
            return <h1 className="text-2xl font-bold">Great Job Explorer</h1>
        } else {
            return <h1 className="text-2xl font-bold">😅 Oops, try again!</h1>
        }
    }

    const Description = () => {
        if (correctAnswers === 4) {
            return <p className="text-gray-400">You answered all questions correctly.</p>
        }
        else if (correctAnswers === 3) {
            return <p className="text-gray-400">You got 3 correct.</p>
        } else {
            return <p className="text-gray-400">You need at least 3 correct answers to pass.</p>
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-space-blue p-6 w-100 sm:w-md shadow-2xl">
                <Header/>
                <h2 className="text-4xl font-semibold text-shadow-2xl">{correctAnswers}/4</h2>
                <Description/>
            </div>
            {correctAnswers >= 3 ? 
                <CollectRewardButton level={level}/>
                :
                <TryAgainButton level={level} resetQuiz={resetQuiz}/>
            }
        </div>
    );
};


export default QuizCompleteCard;