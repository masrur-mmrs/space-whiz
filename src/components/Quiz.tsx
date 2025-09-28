"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from './Navbar';
import QuizCard from './cards/QuizCard';
import ProgressBar from './ProgressBar';
import QuizCompleteCard from './cards/QuizCompleteCard';
import quizData from "@/data/quiz.json"
import NextQuestion from './NextQuestion';

interface QuizSet {
    [key: string] : QuizData
}

const Quiz: React.FC = ({}) => {
    const params = useParams<{quiz : string}>()
    const [quiz, setQuiz] = useState<Quiz[]>([]);
    const [adventure, setAdventure] = useState<string>("");
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [showTimer, setShowTimer] = useState<boolean>(false);
    
    const level = params.quiz.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    const quizSet = quizData as QuizSet

    useEffect(() => {
        if (quizSet) {
            for (const adventure in quizSet) {
                for (const mission in quizSet[adventure]) {
                    if (mission === params.quiz) {
                        setAdventure(adventure);
                        setQuiz(quizSet[adventure][params.quiz]);
                    }
                }
            }   
        }
    }, [params.quiz, adventure, quizSet]);

    const resetQuiz = () => {
        setQuestionNumber(0);
        setCorrectAnswers(0);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar title={`${level} - Quiz`}/>
            <ProgressBar value={20*(questionNumber+ 1)} color="#1142d4"/>
            <p className="text-center my-4 text-gray-400">{(questionNumber<4)?`Questiostion ${questionNumber + 1} of 4`:`All Complete!`}</p>
            {(quiz.length > 0) &&
                (
                    (questionNumber < 4)?
                    (<QuizCard
                        question={quiz[questionNumber]!.question}
                        options={quiz[questionNumber]!.options}
                        answer={quiz[questionNumber]!.answer}
                        setCorrctAnswers={setCorrectAnswers}
                        setQuestionNumber={setQuestionNumber}
                        setShowTimer={setShowTimer}
                    />) 
                    :
                    (<QuizCompleteCard level={params.quiz} correctAnswers={correctAnswers} resetQuiz={resetQuiz}/>)
                )
            }
            {showTimer && <NextQuestion questionNumber={questionNumber}/>}
        </div>
    );
};


export default Quiz;