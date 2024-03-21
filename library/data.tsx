import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Resource from "@/public/Resource.png";
import Realtor from "@/public/Realtor.png";
import Estate from "@/public/MERN_RE.png";
import Cart from "@/public/Cart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Mern Estate Website",
    description:
      "A Real Estate website where people can find there home. I worked on this full-stack project for 3 months.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node", "Redux Toolkit"],
    image: Estate,
    URL: "https://estate-lake.vercel.app/",
  },
  {
    title: "Realtor clone",
    description: "This is a realtor clone that is a house listing website.",
    tags: ["React", "Tailwind", "Firebase"],
    image: Realtor,
    URL: "https://website-clone-chi.vercel.app/",
  },
  {
    title: "Checkout cart",
    description: "Checkout cart page implemented using redux toolkit",
    tags: ["React", "Redux Toolkit", "Tailwind"],
    image: Cart,
    URL: "https://redux-toolkit-cart-sigma.vercel.app/",
  },
  {
    title: "AI Powered Resource Management System",
    description: "A resource Management website that integrates AI into it.",
    tags: ["React", "Redux", "DBSqlite", "Tailwind", "Redux Toolkit"],
    image: Resource,
    URL: "",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
