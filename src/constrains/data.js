import * as ROUTES from "./routes";

// Site-wide content: nav, about, contact, and the work-index intro.
//
// Case study content does NOT live here. Each case study owns a module in
// constrains/cases/ and the work index derives its cards from that registry.
// See CLAUDE.md -> "Adding a case study".

const welcometxt = {
  name: "Mahmoud",
  bio: "I'm currently working as a digital product designer with 5+ years of experience, I've had the opportunity to work on different projects such as digital sales tools for real estate developers, learning management system, and B2B dashboard."
}

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
        italic: "September 2019 - December 2019",
      },
      {
        subTitle: "Faculty of Computer and Information",
        bio: "Bachelor Degree, Computer Science",
        italic: "June 2012 - June 2016",
      },
    ],
  },
  {
    title: "experience",
    collection: [
      {
        subTitle: "Product Designer at sakneen",
        italic: "April 2020 - Present",
      },
      {
        subTitle: "UI Developer at sakneen",
        italic: "April 2020 - October 2021",
      },
      {
        subTitle: "UX/UI Designer at Pioneers",
        italic: "January 2020 - March 2020",
      },
    ],
  },
  {
    title: "design skills",
    collection: [
      {
        bio: "design thinking, interaction design, information architecture, visual design, design tools like (Adobe xd & figma) graphics design, color theory, wireframing, prototyping, design system.",
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
    title: "+20 101 695 3899",
    icon: "../assets/phone.svg",
    url: "tel:+201016953899",
  },
  // {
  //   title: "Cairo, Egypt",
  //   icon: "../assets/marker.svg",
  //   url: "https://goo.gl/maps/B3nhKEt64fLiAFzFA",
  // },
];

// Social section
const getSocial = [
  {
    title: "twitter",
    icon: "./assets/twitter.svg",
    url: "https://twitter.com/HMahmouds",
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
    "I'm mahmoud, have Bachelor's degree in Computer and Information Sciences graduated in 2016, I am a digital product designer with over 5 years of experience. I have completed several projects such as an e commerce web app, a real estate marketplace and SaaS projects such as dashboards and landing pages",
  secondaryBio:
    "I believe that good design is easy to understand, appropriate for people of various abilities and backgrounds, and solves user problems",
  lists: [
    "Empathize with users to identify their goal, pinpoint and motivations, also business objectives",
    "Define user problem space based on research like (user stories, personas, Affinity Diagrams)",
    "Take information, insights, and data gathered from research and create design solutions. That is the ideation process",
    "Finally create prototypes of the designs and test with a group of users to get feedback",
    "It’s an iterative process Test -> Ideate -> prototype (user-centered-design and iterative process)",
  ],
};

// Sakneen marketplace: no page renders these today (pre-existing dead content).
const sakCover = {
  coverImg: "/assets/sakneen/sak-cover.webp",
};

const saknUrls = [
  {
    label: "more info",
    url: "https://www.sakneen.com/en"
  },
]

const sakOverview = {
  projectName: "Real Estate Marketplace",
  title: "overview",
  desc: "Sakneen, the online portal that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe.",
};

const sakScroll = [
  {
    src: "/assets/sakneen/sak-1.webp",
  },
  {
    src: "/assets/sakneen/sak-2.webp",
  },
  {
    src: "/assets/sakneen/sak-3.webp",
  },
];

// sakneen Case

// Bitcoin Jungle: pages/CoinApp exists but its route is commented out in pages/App.
const coinCover = {
  coverImg: "/assets/cJungle/cover.webp",
};

const coinUrls = [
  {
    label: "Figma File",
    url: "https://www.figma.com/file/8KAKHkUXWoZLxoJ1VMJubD/Bitcoinjungle-Website-(Freelance-Copy)?node-id=0-1&t=QB5g6P0lpohXUhJR-0"
  },
  {
    label: "Beta Website",
    url: "https://market.staging.pvbtc.cloud/"
  },
]

const coinOverview = {
  projectName: "Bitcoin Jungle",
  title: "overview",
  desc: "I had the opportunity to work on a project redesigning a responsive website for an existing mobile application as a freelancer on Upwork. This project aims to display the latest posts about subjects such as vehicles, restaurants, and properties, among others. Users can search for any subject, and the app includes a map search flow that makes the search process easier.",
};

const coinInsights = [
  {
    title: "Tools",
    desc: "Figma, user research, website design",
  },
  {
    title: "Deliverables",
    desc: "Accessible Figma file of 23+ components and user flows",
  },
  {
    title: "Impacts",
    desc: "Build Responsive wesite design with 2+ iterations of user flows and prototyping",
  },
];

const coinProjectStatus = [
  {
    title: "Duration",
    collection: [
      {
        bio: "4 Weeks",
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
        bio: "Upwork",
      },
    ],
  },
];

const coinProblem = {
  probTitle: "The Problem, Research Summary",
  probDesc:
    "Before considering redesigning, I needed to learn more about the concept.",
  probDesc2:
    "Analyzed an existing mobile app and Looked at similar apps, and get some insights:",
  probLists: [
    "lack of text accessibility for map pins and Text sizes, white spacing, and the layout grid are all inconsistent",
    "unclear toggle control between map and list view",
    "The filter experience is overwhelming because it appears above the main view",
    "Many users are unable to install the mobile app on their smartphones, so they need a website to access via a laptop or phone browser",
  ],
};

const coinFlow = {
  flowTitle: "User Flow",
  flowImages: [
    {
      src: "/assets/cJungle/user-flow.png",
    },
  ],
};

const coinDesigns = {
  designsTitle: "Designs, Iterations",
  designsImg: [
    {
      src: "/assets/cJungle/s1.webp",
    },
    {
      src: "/assets/cJungle/s2.webp",
    },
    {
      src: "/assets/cJungle/s3.webp",
    },
  ],
};

const coinSuccess = {
  successTitle: "product success 🏅",
  successDesc:
    "Collaborated with a software engineer to deliver assets and components for the development process. (Still in the testing phase).",
};

const cointesting = {
  testTitle: "Feedbacks",
  testDesc:
    "We evaluated the designs with a group of users and received some feedback.",
  testImages: [
    {
      src: "/assets/cJungle/feedback.webp",
    },
  ],
};

const coinLearning = {
  learnTitle: "what i learned 👨🏼‍💻",
  learnList: [
    "Conducted user research with a group of target users",
    "Collaborated with a software engineer to deliver user flows for the implementation process",
    "Think and look for ways to make the user's search experience better",
    "Learned to work per hour and organize tasks and milestones on upwork",
  ],
};

export {
  welcometxt,
  navItems,
  experience,
  contactInfo,
  getSocial,
  aboutMe,
  sakCover,
  saknUrls,
  sakOverview,
  sakScroll,
  coinCover,
  coinUrls,
  coinOverview,
  coinInsights,
  coinProjectStatus,
  coinProblem,
  coinFlow,
  coinDesigns,
  coinSuccess,
  cointesting,
  coinLearning,
};
