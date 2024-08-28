import React from "react";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import Resource from "@/public/Resource.png";
import Realtor from "@/public/Realtor.png";
import Estate from "@/public/MERN_RE.png";
import MovieFinder from "@/public/MovieFinder.png";
//import Figma from "@/public/Figma.png";
import {LuSchool2} from "react-icons/lu";
import {TbCertificate} from "react-icons/tb";
import Birdy from "@/public/Birdy.png";
import BlogSpace from "@/public/BlogSpace.png";

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
        name: "Education",
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
        title: "Mern Estate Website",
        description: "A Real Estate website where people can find their home and make posts to rent, sell their houses.",
        tags: ["React", "Express", "MongoDB", "Tailwind", "Node.js", "Redux Toolkit"],
        image: Estate,
        URL: "https://github.com/Prajwalg19/estate/",
    },
      {
        title: "Birdy",
        description: "A Social media app for friends and family to post and interact with each other.",
        tags: ["React","MongoDB", "Node.js","Tailwind", "Firebase", "Express"],
        image: Birdy,
        URL: "https://github.com/Prajwalg19/Birdy",
    },
    {
        title: "House listing website",
        description: "A feature-rich house listing web app developed with React, Firebase and Firestore for efficient data storage and management.",
        tags: ["React", "Tailwind", "Firebase", "Firestore"],
        image: Realtor,
        URL: "https://github.com/Prajwalg19/House-listing-website",
    },
      {
        title: "Movie Finder",
        description: "Find your favorite movie's plot, ratings, cast and more",
        tags: ["React","Nodejs", "MongoDB", "Tailwind", "Redux Toolkit"],
        image: MovieFinder,
        URL: "https://github.com/Prajwalg19/movieFinder",
    },
     {
        title: "Blog Space",
        description: "Share your knowledge and experiences by writing blogs and articles",
        tags: ["React", "ExpressJs","Nodejs", "MongoDB", "Tailwind"],
        image: BlogSpace,
        URL: "https://github.com/Prajwalg19/project_blog",
    },
      {
        title: "AI Powered RMS",
        description: "A resource Management website that integrates AI models for easing out the process.",
        tags: ["React", "Redux", "DBSqlite", "Tailwind", "Redux Toolkit"],
        image: Resource,
        URL: "https://github.com/Prajwalg19/project/tree/backup",
    },
  // {
   //     title: "Figma design",
    //    description: "A figma design cloned using NextJS and Tailwind",
    //    tags: ["NextJS", "Tailwind", "Framer-motion"],
     //   image: Figma,
    //    URL: "https://matrix-eight-rose.vercel.app/",
   // },
  
] as const;

export const skillsData = ["TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind","MongoDB", "Redux", "Express", "PostgreSQL","Docker","Framer Motion", "Unix", "Bash", "Firebase", "Firestore" ,"Java"] as const;
