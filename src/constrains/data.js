import * as ROUTES from "./routes";

const caseLinks = [
  {
    title: "sakneen",
    url: ROUTES.CASE_1,
    coverImg: "/assets/img.jpg",
  },
  {
    title: "couse app",
    url: ROUTES.CASE_2,
    coverImg: "/assets/courseApp/visual.jpg",
  },
];

// Navigation bar items
const navItems = [
  {
    name: "work",
    url: `${ROUTES.WORK}`,
  },
  {
    name: "about",
    url: `${ROUTES.ABOUT}`,
  },
  {
    name: "contact",
    url: `${ROUTES.CONTACT}`,
  },
];
// Experience section
const experience = [
  {
    title: "education",
    collection: [
      {
        subTitle: "Open Source Application Development",
        bio: "Technical Trainer, Information Technology Institute (ITI)",
        italic: "December 2019",
      },
      {
        subTitle: "Faculty of Computer and Information",
        bio: "Bachelor Degree, Computer Science",
        italic: "June 2016",
      },
    ],
  },
  {
    title: "experience",
    collection: [
      {
        subTitle: "Sakneen",
        italic: "April 2020 - Present",
      },
      {
        subTitle: "Pioneers",
        italic: "January 2020 - March 2020",
      },
    ],
  },
  {
    title: "design skills",
    collection: [
      {
        bio: "design thinking, site map, information architecture, visual design, design tools like (Adobe xd & figma) graphics design, color theroy, wireframing, prototyping .",
      },
    ],
  },
  {
    title: "technical skills",
    collection: [
      {
        bio: "HTML5, CSS3, responsive web design, mobile first approuch, understanding javascript with various frameworks like (react js), good Knowledge in Object Oriented Programming, Algorithms and Data Structures .",
      },
    ],
  },
];
// Contacts section
const contactInfo = [
  {
    title: "elshaieb_career@outlook.com",
    icon: "../assets/mail.svg",
    url: "mailto:elshaieb_career@outlook.com",
  },
  {
    title: "+20 121 695 3899",
    icon: "../assets/phone.svg",
    url: "tel:+01216953899",
  },
  {
    title: "Cairo, Egypt",
    icon: "../assets/marker.svg",
    url: "",
  },
];
// Social section
const getSocial = [
  {
    title: "twitter",
    icon: "./assets/twitter.svg",
    url: "https://twitter.com/Mahmoud22_h",
  },
  {
    title: "behace",
    icon: "./assets/behance.svg",
    url: "https://behance.net/mahmoudelshaieb",
  },
  {
    title: "linkedin",
    icon: "./assets/linkedin.svg",
    url: "https://www.linkedin.com/in/mahmoudelshaieb/",
  },
];

// about
const aboutMe = {
  avatar: "./assets/me.jpeg",
  primaryBio:
    "I'm mahmoud, have Bachelor's degree in Computer and Information Sciences graduated in 2016, I'm digital product designer, user interface creator for web and mobile applications based on user experience and business goals .",
  secondaryBio:
    "I develop myself in programming and frontend development, this current personal portfolio is completely customized and i have done it from scratch using react js (no website builder no CMS) .",
};

// CourseApp Case
const courseAppCover = {
  coverTitle: "course app",
  subTitle: "About the project",
  strong: "ios app",
  bio: "contain various of online course in programming, algorithms and data structures, can select favorites course with specific teachers in this field .",
  coverImg: "/assets/courseApp/visual.jpg",
};

const courseAppProjectStatus = [
  {
    title: "duration",
    collection: [
      {
        bio: "4 weeks",
      },
    ],
  },
  {
    title: "role",
    collection: [
      {
        bio: "UX/UI Designer",
      },
    ],
  },
  {
    title: "location",
    collection: [
      {
        bio: "Cairo, Egypt",
      },
    ],
  },
];

const CourseAppFlow = {
  flowTitle: "user flow",
  flowDesc:
    "simple flow to show important screens and how user can navigate within those screens",
  flowImg: "/assets/courseApp/userflow.png",
};

const CourseAppFraming = {
  frameTitle: "wireframing",
  frameDesc:
    "black and white low fidelity illustrations to show how elements working together before applying visuals",
  frameImg: "/assets/courseApp/wireframing.png",
};

const CourseAppVisual = {
  visualTitle: "visual design",
  visualDesc:
    "high fidelity mockups illustrations after applying colors, icon, typography and any other UI elements",
  visualImg: "/assets/courseApp/visual.jpg",
};

const CourseAppPrototype = {
  prototypeTitle: "prototyping",
  prototypeDesc:
    "make connections with all screens and present how user can move from frame to another with suitable transitions and easing",
  prototypeImg: "/assets/courseApp/prototyping.png",
};

const CourseAppGuide = [
  {
    subTitle: "colors",
    img: "./assets/courseApp/colors.png",
  },
  {
    subTitle: "typography",
    img: "./assets/courseApp/typography.png",
  },
  {
    subTitle: "iconography",
    img: "./assets/courseApp/icons.png",
  },
  {
    subTitle: "illustration",
    img: "./assets/courseApp/illastrations.png",
  },
  {
    subTitle: "components",
    img: "./assets/courseApp/components.png",
  },
];
// CourseApp Case

export {
  experience,
  contactInfo,
  getSocial,
  navItems,
  caseLinks,
  courseAppCover,
  courseAppProjectStatus,
  CourseAppFlow,
  CourseAppFraming,
  CourseAppVisual,
  CourseAppPrototype,
  CourseAppGuide,
  aboutMe,
};
