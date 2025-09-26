import React from 'react';
import FAQCard from '../cards/FAQCard';

const FAQList: React.FC = ({}) => {
    const faqs: FAQ[] = [
        {
            iconColor: "blue",
            question: "How do I unlock new levels?",
            answer: "Complete videos and pass quizzes with at least 3 out of 4 correct answers to unlock the next mission!"
        },
        {
            iconColor: "purple",
            question: "What are space weather events?",
            answer : "Space weather includes solar flares, auroras, and cosmic storms that can affect Earth and technology!"
        },
        {
            iconColor: "yellow",
            question: "Can I replay missions?",
            answer: "Yes! You can always return to any unlocked mission to review the content and improve your knowledge."
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center mx-3 my-4 gap-4">
            <h1 className="text-2xl font-bold text-white mb-4">❓ Frequently Asked Questions</h1>
            {
                faqs.map((faq, index) => 
                    <FAQCard
                        key={index}
                        iconColor={faq.iconColor}
                        question={faq.question}
                        answer={faq.answer}
                    />
                )
            }
        </div>
    );
};


export default FAQList;