import React from 'react';


interface LearningOutcomeCardProps {
    learningOutcomes: string[];
}


const LearningOutcomeCard: React.FC<LearningOutcomeCardProps> = ({ learningOutcomes }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-space-blue w-fit rounded-3xl border p-4 mt-8">
            <h1 className="text-xl font-extrabold mb-2">🧠 What You Learned</h1>
            {learningOutcomes.map((value, index) => 
                <p key={index} className="text-gray-400">{value}</p>
            )}
        </div>
    );
};


export default LearningOutcomeCard;