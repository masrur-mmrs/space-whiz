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

declare type Language = "English" | "Bangla";