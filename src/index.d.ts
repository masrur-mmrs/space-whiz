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

declare interface Mission {
  link: string;
  completed: boolean;
}

declare interface Chapter {
  [key: string]: Mission;
}

declare interface Missions {
  [key: string]: Chapter;
}

declare interface LearningOutcomes {
    [key: string]: string[];
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

declare interface Preferences {
    liveData: boolean;
    subtitles: boolean;
    language: Language;
}

declare interface Rewards {
    [key: string] : {
        badge: string;
        words: string;
        emoji: string;
    }
}

declare type Language = "English" | "Bangla";