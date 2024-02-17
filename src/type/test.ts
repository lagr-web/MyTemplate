// Generated by https://quicktype.io

export interface Data {
    settings: Settings;
    intro:    Intro;
    social:   Social[];
    footer:   string;
    present:  Intro;
    category: Category;
}

export interface Category {
    job:    cat[];
    skills: cat[];
    fun:    cat[];
}

export interface cat {
    id:       number;
    headline: string;
    content:  string;
    image?:    string;
    "links:": Links[];
}

export interface Links {
    online: string;
    github: string;
}

export interface Intro {
    title:   string;
    content: string;
}

export interface Settings {
    backgroundcolor:  string;
    headercolor:      Cardheadercolor[];
    sectionheadline:  Cardheadercolor[];
    cardheadercolor:  Cardheadercolor;
    cardsectioncolor: Cardheadercolor;
}

export interface Cardheadercolor {
    bgcolor:   string;
    textcolor: string;
}

export interface Social {
    title: string;
    link:  string;
}
