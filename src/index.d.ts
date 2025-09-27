declare interface Adventures {
    title: string;
    image: string;
    completed: boolean;
}

declare interface Video {
    thumbnail: string;
    title: string;
    subtitle: string;
}

declare interface Missions {
    [key : string]: Array<string, Video>;
}

declare interface LearningOutcomes {
    [key: string]: string[];
}

declare interface Mission {
    [key: string]: { link: string; completed: boolean };
}

declare interface Guide {
    icon: import("@fortawesome/fontawesome-svg-core").IconProp;
    iconBackgroundStyles: string;
    title: string;
    description: string;
    gradientStyles: string;
}

declare interface FAQ {
    iconColor: string;
    question: string;
    answer: string;
}

declare interface Quiz {
    question: string;
    options: string[];
    answer: string;
}
declare interface QuizData {
    [key: string]: Quiz[];
}

declare type Language = "English" | "Bangla";