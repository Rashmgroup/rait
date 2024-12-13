export const METADATA = {
  title: "Rashm Academy of Information Technology",
  description:
    "RAIT(Rashm Academy of Information Technology) have passionate educators and teachers, dedicated to bridging the gap in students' learning, helping them connect theory with practice and empowering them to reach their full potential",
    siteUrl: "https://rait-rrf.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Courses",
    ref: "works",
  },
  {
    name: "Placement",
    ref: "skills",
  },
  // {
  //   name: "Timeline",
  //   ref: "timeline",
  // },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "We train demanded skill's",
  "We train from Zero to Hero",
  "We provide best Education",
  "We also work for clients",
];

export const EMAIL = "rashmgroup@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  medium: "https://medium.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  dribbble: "https://dribbble.com/",
  behance: "https://www.behance.net//",
  twitter: "https://twitter.com/",
  topmate: "https://www.topmate.io/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [

  {
    name: "DCA Complete Course",
    image: "/courses/DCA.jpg",
    blurImage: "/courses/blur/dlt-website-blur.jpg",
    description: "Diploma in computer application is great course for you",
    gradient: ["#245B57", "#004741"],
    url: "",
    tech: ["excel", "powerpoint", "network"],
  },
  {
    name: "ADCA Complete Course",
    image: "/courses/adca.jpg",
    blurImage: "/courses/blur/dl-unify-blur.jpg",
    description: "Advance Diploma in computer application is Superset of DCA ",
    gradient: ["#003052", "#167187"],
    url: "",
    tech: ["network", "computer", "excel", "html"],
  },
  {
    name: "Diginer - Web/Graphic designer",
    image: "/courses/web&grap.jpg",
    blurImage: "/courses/blur/figgen-blur.jpg",
    description: "After learning this course you will become Expert Des!",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["figma","html","css"],
  },
 
  {
    name: "DFA - Complete course",
    image: "/courses/dfa.jpg",
    blurImage: "/courses/blur/ngx-quill-upload-blur.jpg",
    description: "Diploma in Financial Accounting is great for future",
    gradient: ["#3A0000", "#771E1E"],
    url: "",
    tech: ["excel", "powerpoint", "gst"],
  },
  {
    name: "O level - NIELIT",
    image: "/courses/olevel.jpg",
    blurImage: "/courses/blur/myokr-blur.jpg",
    description: "Olevel by National Institute of Electronics & IT",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: [ "iot", "py","network", "tor"],
  },
  {
    name: "CCC - NIELET",
    image: "/courses/ccc.jpg",
    blurImage: "/courses/blur/huminos-blur.jpg",
    description: "CCC by National Institute of Electronics & IT",
    gradient: ["#17007B", "#3A2C79"],
    url: "",
    tech: ["libray", "network", "computer"],
  },
  {
    name: "Web Desigining",
    image: "/courses/la.jpg",
    blurImage: "/courses/blur/akgec-blur.jpg",
    description: "Learn How to Desigine awosome website",
    gradient: ["#5E4C06", "#746528"],
    url: "",
    tech: ["javascript", "html", "css","next"],
  },
  {
    name: "Hindi English Typing",
    image: "/courses/typing.jpg",
    blurImage: "/courses/blur/alpha-blur.jpg",
    description: "Learn How you will be 3x skilled in typing ",
    gradient: ["#172839", "#334659"],
    url: "",
    tech: ["keyboard", "hindi", "english"],
  },
  {
    name: "Tally - Complete Course",
    image: "/courses/tally.jpg",
    blurImage: "/courses/blur/farewell18-blur.jpg",
    description: "Become master in tally/prime with GST",
    gradient: ["#142D46", "#2E4964"],
    url: "",
    tech: ["computer", "gst", "tally"],
  },
  {
    name: "Frontend Development",
    image: "/courses/forntend.jpg",
    blurImage: "/courses/blur/bdc18-blur.jpg",
    description: "Learn HTML CSS JS (lib/frameworks) Build Killer Webs 🚀",
    gradient: ["#470700", "#712A23"],
    url: "",
    tech: ["gsap", "html", "css","javascript","npm"],
  },
  {
    name: "Excel - Complete Course",
    image: "/courses/excel.jpg",
    blurImage: "/courses/blur/scrolls-blur.jpg",
    description: "For your bright bussiness learn eXcel",
    gradient: ["#685506", "#7B6921"],
    url: "",
    tech: ["excel", "tally", "computer"],
  },
  {
    name: "Photoshop & CoralDraw",
    image: "/courses/draw&shop.jpg",
    blurImage: "/courses/blur/cardize-blur.jpg",
    description: "With RAIT you will master on photoshop&coraldraw",
    gradient: ["#552A04", "#614023"],
    url: "",
    tech: ["photoshop", "draw", "coral"],
  },
  {
    name: "Computer languages",
    image: "/courses/la.jpg",
    blurImage: "/courses/blur/cardize-blur.jpg",
    description: "With RAIT you will master on photoshop&coraldraw",
    gradient: ["#552A04", "#614023"],
    url: "",
    tech: ["py", "java", "typescript","cpp"],
  },
];

export const SKILLS = {
  company: [
  
    "google",
    "aws",
    "ibm",
    "infosys",
    "meta",
    "tcs",
    "wipro",
    "dhl",
    "mac",
    "microsoft",
    "hcl",
    "hp",
    "sumsung",
    "toyato",
    "tata",
    "addidas",
    "sony",
    "coca",
    "nestle",
    "lg",
    "panasonic",
    "cogni"
  ],
  // userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  // other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}


export const GTAG = "UA-163844688-1";
