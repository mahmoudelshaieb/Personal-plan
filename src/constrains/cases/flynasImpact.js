import * as ROUTES from "../routes";
import { STATUS } from "./status";

// Design Impact at flynas — bento layout.
// Every value below belongs to this case study only. Do not import content
// from another case module: copy it, so editing one study can never change another.
const flynasImpact = {
  meta: {
    key: "flynasImpact",
    layout: "bento",
    title: "Design Impact at flynas",
    status: STATUS.LIVE,
    desc: "Design work across flynas operations, customer experience and cabin crew — from connectivity monitoring to the airline's first design system",
    url: ROUTES.CASE_8,
    cover: "/assets/flynas/cover.webp",
  },

  overview: {
    title: "overview",
    desc: "Summary of design work spanning operations, customer experience, and cabin crew.",
  },

  // ImpactMetrics sizes its columns from this count. Four fits; five would not.
  metrics: [
    { title: "Areas of the business touched", metric: "4" },
    { title: "More business users", metric: "+20%" },
    { title: "Design system in use", metric: "1" },
    { title: "Penalty avoided / LDM Msg", metric: "~$5k" },
  ],

  status: [
    { title: "duration", collection: [{ bio: "October 2025 - Present" }] },
    { title: "role", collection: [{ bio: "Senior Product Designer" }] },
    { title: "Type", collection: [{ bio: "Airline business systems" }] },
  ],

  // Grid cells, rendered in order. kind: "impact" | "bento" | "descriptive".
  // span = the cell-lg-* width out of 12; everything is full width on mobile.
  // assetWidth caps the mockup so a tall phone doesn't tower over its text.
  sections: [
    {
      kind: "impact",
      className: "mt-5",
      span: 12,
      category: "Operations",
      title: "Connectivity monitoring for LDM messages",
      img: "/assets/flynas/operations-ldm.webp",
      assetWidth: 100,
      blocks: [
        {
          label: "Problem",
          body: "Load and distribution messages must reach external systems before an aircraft departs. When a dependency failed silently, the airline risked costly penalties.",
        },
        {
          label: "Approach",
          body: "Designed a monitoring system that shows the live status of every external dependency, so the operations team can spot and resolve a failure before departure.",
        },
        {
          label: "Result",
          body: "Helps flynas avoid penalties of roughly $5,000 per missed message.",
          highlight: true,
        },
      ],
    },
    {
      kind: "impact",
      span: 12,
      category: "Customer experience",
      title: "The self-service portal experience",
      img: "/assets/flynas/self-service-portal.webp",
      assetWidth: 42,
      blocks: [
        {
          label: "Problem",
          body: "The portal was hard to navigate — unclear hierarchy and a desktop-first layout that worked against how customers actually use it.",
        },
        {
          label: "Approach",
          body: "Ran a comprehensive audit, then rebuilt the information architecture and user flow, sharpened the visual hierarchy, and designed mobile-first.",
        },
        {
          label: "Result",
          body: "A clearer, faster portal built to lift customer satisfaction.",
          highlight: true,
        },
      ],
    },
    {
      kind: "impact",
      span: 12,
      category: "Customer experience",
      title: "The travel itinerary template",
      img: "/assets/flynas/itinerary.webp",
      assetWidth: 62,
      blocks: [
        {
          label: "Problem",
          body: "The itinerary told customers little about their trip and didn't feel like flynas, leaving them unsure of the details that mattered.",
        },
        {
          // The deck labels this block "Contribution", not "Approach".
          label: "Contribution",
          body: "Worked with the digital sales team to redesign the template — more informative, on-brand, and clear at every step of the journey.",
        },
        {
          label: "Result",
          body: "Customers stay in the loop, with an itinerary that looks and sounds like flynas.",
          highlight: true,
        },
      ],
    },
    {
      kind: "impact",
      span: 12,
      category: "Cabin crew",
      title: "Critical reports for cabin crew",
      img: "/assets/flynas/cabin-reports.webp",
      assetWidth: 100,
      blocks: [
        {
          label: "Problem",
          body: "Crew reports were inconsistent from one view to the next, slowing the actions crews take before takeoff and the follow-ups after departure.",
        },
        {
          label: "Approach",
          body: "Redesigned every critical report with one modern, cohesive interface, and unified styles and layouts so each view behaves the same way.",
        },
        {
          label: "Result",
          body: "One consistent experience across all reports — faster, more confident crew actions.",
          highlight: true,
        },
      ],
    },
    {
      kind: "impact",
      span: 12,
      title: "Sky Buddy app",
      img: "/assets/flynas/sky-buddy.webp",
      assetWidth: 42,
      blocks: [
        {
          // Slide 07 carries no body copy; this line describes only what the
          // mockup shows. Replace it if the deck's intent was different.
          body: "Flight details in the crew's hand — boarding progress, baggage load and a class-by-class breakdown, on one screen.",
        },
      ],
    },
  ],

  // FullPresent blocks rendered after the grid.
  outro: [
    {
      title: "A design system for flynas",
      desc: "I initiated flynas's first comprehensive design system — one source of truth for colour, type, spacing and components, and a shared library of real, reusable buttons, inputs, controls and tags every flynas product is built from, so every business application looks and behaves like flynas.",
      img: [
        {
          src: "/assets/flynas/component-library.webp",
          alt: "flynas component library — buttons, selection controls, text inputs, tags and badges, avatars, pagination and progress",
        },
      ],
    },
    {
      title: "An AI-augmented design workflow",
      desc: "A faster way to move from a stakeholder request to working design — without losing rigor. Research, design, and functional code, delivered from one connected workflow.",
      lists: [
        "Research & align — refine stakeholder requests and surface the right questions before deciding",
        "Translate requirements into clear, structured prompts for the tools",
        "Generate & prototype — explore directions fast with AI prototyping for research and inspiration",
        "Refine in Figma — bring results into Figma for craft, polish, and design decisions",
        "Deliver — ship prompts, design-system updates, product decisions, and working code",
      ],
    },
    {
      title: "what's next",
      desc: "Scale the design system across every flynas product, and keep investing in design.",
    },
  ],
};

export default flynasImpact;
