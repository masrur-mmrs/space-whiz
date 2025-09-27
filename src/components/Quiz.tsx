"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from './Navbar';
import QuizCard from './cards/QuizCard';
import ProgressBar from './ProgressBar';
import QuizCompleteCard from './cards/QuizCompleteCard';
import quizData from "@/data/quiz.json"

const Quiz: React.FC = ({}) => {
    const params = useParams<{quiz : string}>()
    const [quiz, setQuiz] = useState<Quiz[]>([]);
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    
    const level = params.quiz.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())
    const quizzes = quizData as QuizData

    useEffect(() => {
        setQuiz(quizzes[params.quiz]);
    }, [params.quiz, quizzes]);

    const resetQuiz = () => {
        setQuestionNumber(0);
        setCorrectAnswers(0);
        setQuiz(quizzes[params.quiz]);
    }

    return (
        <>
            <Navbar title={`${level} - Quiz`}/>
            <ProgressBar value={20*(questionNumber+ 1)} color="#1142d4"/>
            <p className="text-center my-4 text-gray-400">{(questionNumber<4)?`Questiostion ${questionNumber + 1} of 4`:`All Complete!`}</p>
            {(quiz.length > 0) &&
                (
                    (questionNumber < 4)?(<QuizCard 
                        question={quiz[questionNumber]!.question}
                        options={quiz[questionNumber]!.options}
                        answer={quiz[questionNumber]!.answer}
                        setCorrctAnswers={setCorrectAnswers}
                        setQuestionNumber={setQuestionNumber}
                    />) 
                    :
                    (<QuizCompleteCard level={params.quiz} correctAnswers={correctAnswers} resetQuiz={resetQuiz}/>)
                )
            }
        </>
    );
};


export default Quiz;