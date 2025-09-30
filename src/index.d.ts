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

declare interface SolarFlarePowerLevel {
    icon : string;
    flareClass: string;
    flareTitle : string;
    flareClassBackground : string;
    description : string
}
declare interface Instrument {
    displayName: string;
}

declare interface LinkedEvent {
    activityID: string;
}

declare interface SolarFlare {
    flrID: string;
    catalog: string;
    instruments: Instrument[];
    beginTime: string;
    peakTime: string;
    endTime: string;
    classType: string;
    sourceLocation: string;
    activeRegionNum: number;
    note: string;
    submissionTime: string;
    versionId: number;
    link: string;
    linkedEvents: LinkedEvent[] | null;
    sentNotifications: null;
}

declare type Language = "English" | "Bangla";