import React from "react";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import Resource from "@/public/Resource.png";
import Realtor from "@/public/Realtor.png";
import Estate from "@/public/MERN_RE.png";
import Cart from "@/public/Cart.png";
import {LuSchool2} from "react-icons/lu";
import {TbCertificate} from "react-icons/tb";

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
        title: "St. Johns High School",
        location: "Bengaluru, Karnataka, India",
        description: "I completed my secondary schooling with a percentage of 92",
        icon: React.createElement(LuSchool2),
        date: "2018-2020",
    },
    {
        title: "Mangalore PU college",
        location: "Bengaluru, Karnataka, India",
        description: "I completed my pre-university with a percentage of 88",
        icon: React.createElement(TbCertificate),
        date: "2018-2020",
    },
    {
        title: "Global Academy of Technology",
        location: "Bengaluru, Karnataka, India",
        description: "Currently pursuing my Computer Science Engineering degree",
        icon: React.createElement(LuGraduationCap),
        date: "2020-2024",
    },
    {
        title: "Full stack developer",
        location: "Bengaluru",
        description: "Learning and building projects of full stack applications",
        icon: React.createElement(FaReact),
        date: "2022-present",
    },
] as const;

export const projectsData = [
     {
        title: "Realtor clone",
        description: "This is a realtor clone that is a house listing website.",
        tags: ["React", "Tailwind", "Firebase", "Firestore"],
        image: Realtor,
        URL: "https://website-clone-chi.vercel.app/",
    },
    {
        title: "Mern Estate Website",
        description: "A Real Estate website where people can find there home. I worked on this full-stack project for 3 months.",
        tags: ["React", "Express", "MongoDB", "Tailwind", "Node", "Redux Toolkit"],
        image: Estate,
        URL: "https://github.com/Prajwalg19/estate",
    },
    {
        title: "Checkout cart",
        description: "Checkout cart page implemented using redux toolkit",
        tags: ["React", "Redux Toolkit", "Tailwind"],
        image: Cart,
        URL: "https://redux-toolkit-cart-sigma.vercel.app/",
    },
    {
        title: "AI Powered RMS",
        description: "A resource Management website that integrates AI into it.",
        tags: ["React", "Redux", "DBSqlite", "Tailwind", "Redux Toolkit"],
        image: Resource,
        URL: "https://github.com/Prajwalg19/project/tree/backup",
    },
] as const;

export const skillsData = ["TypeScript", "Java", "React", "Next.js", "Node.js", "Git", "Tailwind", "MongoDB", "Redux", "Express", "PostgreSQL", "Framer Motion", "Unix", "Bash", "JDBC", "Firebase", "Firestore"] as const;
