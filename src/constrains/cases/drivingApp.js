import * as ROUTES from "../routes";
import { STATUS } from "./status";

// Driving Mobile App (UCAR) — narrative layout.
// Every value below belongs to this case study only. Do not import content
// from another case module: copy it, so editing one study can never change another.
const drivingApp = {
  meta: {
    key: "drivingApp",
    layout: "narrative",
    title: "Driving Mobile App",
    status: STATUS.FINISHED,
    // Card blurb on the work index. Intentionally shorter than overview.desc.
    desc: "Make travel between Egypt's governorates easier and more affordable for travellers by sharing trips with nearby networks",
    url: ROUTES.CASE_6,
    cover: "/assets/drivingApp/d-cover.webp",
  },

  overview: {
    title: "overview",
    desc: "UCAR is a freelance project on Upwork. This project's goal is to make travel between Egypt's governorates easier and more affordable for travellers by sharing trips with nearby networks.",
  },

  liveUrls: [
    {
      label: "Figma File",
      url: "https://www.figma.com/file/ERjPy53J2fmJH1Y5DMfLqU/%F0%9F%9A%97-Ucar-Mobile-App?node-id=0-1&t=22fFosLupkla45by-0",
    },
  ],

  // SummaryInsights renders a fixed 3-up row. Keep this at exactly 3 entries.
  insights: [
    {
      title: "Tools",
      desc: "Figma, miro, user research, competitive analysis,mobile app design",
    },
    {
      title: "Deliverables",
      desc: "Accessible Figma file of 20+ components and mobile screens",
    },
    {
      title: "Impacts",
      desc: "Build UI/UX mobile app with 2+ iterations of user flows and prototyping",
    },
  ],

  status: [
    { title: "duration", collection: [{ bio: "4 weeks" }] },
    { title: "role", collection: [{ bio: "UX/UI Designer" }] },
    { title: "location", collection: [{ bio: "Upwork" }] },
  ],

  // Each entry is one FullPresent block, rendered in order.
  // Supported keys: title, subTitle, desc, descSecondry, lists, img, url, urlLabel.
  sections: [
    {
      title: "The problem",
      desc: "Egyptians are having difficulty traveling from one governorate to another. Traveling within Egypt between governorates is painful and unsafe, and finding the right ride or transportation is an overwhelming process that wastes valuable time, effort, and money.",
    },
    {
      title: "project goals",
      subTitle: "Trip sharing, Drive or Ride",
      desc: "As a driver, can utilize his personal vehicle and share a trip with surrounding networks of riders and make money.",
      descSecondry: "As a rider, can submit incoming trips and connect with drivers if their trips match. it’s lower cost and save money.",
      img: [
        { src: "/assets/drivingApp/s1.webp" },
        { src: "/assets/drivingApp/s2.webp" },
        { src: "/assets/drivingApp/s3.webp" },
      ],
    },
    {
      title: "User Research",
      desc: "The problem of travel between governorates in Egypt began due to a lack of interest in the public transportation network. I and people nearby are traveling a lot, and a huge majority of travelers experience the same problem while traveling between governorates.",
      descSecondry: "So I began researching this topic in order to find a solution, and I asked a group of people if there could be an application like Uber that could solve this problem. I interviewed people who are already using travel apps like Uber. Some of the pain points are:",
      lists: ["It's only in the capital of Egypt", "The price is very high"],
    },
    {
      title: "Competitive analysis",
      desc: "After the interview, take notes. I analyzed 4 most popular apps surrounding this goal and topic and I found that none of them can solve the problem and help passengers have a comfortable and affordable trip.",
      lists: ["Uber", "SWVL", "InDriver", "HitchHiker"],
    },
    {
      title: "User Persona",
      img: [
        { src: "/assets/drivingApp/persona1.webp" },
        { src: "/assets/drivingApp/persona2.webp" },
      ],
    },
    {
      title: "Information Architecture",
      img: [{ src: "/assets/drivingApp/user-flow.png" }],
    },
    {
      title: "User testing, iteration designs",
      desc: "Conducting user tests with a group of target users and getting feedback. We've gone through several design iterations in order to improve some designs and add new features.",
      img: [
        { src: "/assets/drivingApp/test1.webp" },
        { src: "/assets/drivingApp/test2.webp" },
        { src: "/assets/drivingApp/test3.webp" },
      ],
    },
    {
      title: "Final designs",
      img: [
        { src: "/assets/drivingApp/d-1.webp" },
        { src: "/assets/drivingApp/d-2.webp" },
        { src: "/assets/drivingApp/d-3.webp" },
        { src: "/assets/drivingApp/d-4.webp" },
        { src: "/assets/drivingApp/d-com.webp" },
      ],
    },
    {
      title: "what i learned 👨🏼‍💻",
      lists: [
        "How to conduct user research and make a competitive analysis",
        "How to listen to potential users to improve UX usability",
        "Analyzed the most popular apps surrounding this goal to conduct a competitive analysis",
        "Built UI/UX mobile application with 2+ iterations of user flows and prototyping",
        "Designed 20+ reusable components in Figma to increase design speed and ensure quality delivery on time",
      ],
    },
  ],
};

export default drivingApp;
