import * as ROUTES from "./routes";

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
        bio: "echnical Trainer, Information Technology Institut",
      },
    ],
  },
  {
    title: "technical skills",
    collection: [
      {
        bio: "echnical Trainer, Information Technology Institut",
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

export { experience, contactInfo, getSocial, navItems };
