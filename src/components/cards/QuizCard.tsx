"use client"
import React, { useState } from 'react';
import HoverScaleWrapper from '../wrapper/HoverScaleWrapper';


interface QuizCardProps {
    question: string;
    options: string[];
    answer: string;
    setCorrctAnswers: React.Dispatch<React.SetStateAction<number>>;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}


const QuizCard: React.FC<QuizCardProps> = ({question, options, answer, setCorrctAnswers, setQuestionNumber}) => {
    const [correct, setCorrect] = useState<boolean | undefined>(undefined);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleOnClick = (option: string) => {
        setSelectedOption(option)
        if (option === answer) {
            setCorrect(true);
            setCorrctAnswers((prev) => {
                if (prev < 4) {
                    return prev + 1
                } else {
                    return prev
                }
            });
        } else {
            setCorrect(false);
        }
        setTimeout(() => {
            setQuestionNumber((prev) => {
                if (prev < 4) {
                    return prev + 1
                } else {
                    return prev
                }
            });
        }, 1500);
    }
    
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl bg-space-blue p-4 w-md">
            <h2 className="text-2xl font-semibold my-2 text-center text-shadow-lg">{question}</h2>
            <div className="grid grid-cols-2 gap-4 mb-2">
                {
                    options.map((option, index) => {
                        return (
                            <HoverScaleWrapper 
                                key={index}
                                style="w-full block"
                            >
                                <button 
                                    onClick={() => handleOnClick(option)}
                                    className={
                                        `flex flex-col items-center justify-between w-full h-full text-shadow-md border-2 rounded-2xl p-2 cursor-pointer 
                                        ${(selectedOption === option)?(correct == undefined ? "border-white": correct ? "border-green-500 bg-green-500" : "border-red-500"):"border-white"}`
                                    }
                                >
                                    {option}
                                </button>
                            </HoverScaleWrapper>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default QuizCard;