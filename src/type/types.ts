export interface Data {
    intro: Intro;
    present: Intro;
    job: Content[];
    skills: Content[];
  }
  
  export interface Intro {
    title: string;
    content: string;
  }
  
  export interface Content {
    id:number;
    headline: string;
    content: string;
    image?:string;
   
  }