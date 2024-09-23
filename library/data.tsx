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
    }
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
        title: "House listing website",
        description: "A feature-rich house listing web app developed with React, Firebase and Firestore for efficient data storage and management.",
        tags: ["React", "Tailwind", "Firebase", "Firestore"],
        image: Realtor,
        URL: "https://website-clone-chi.vercel.app/",
    },
      {
        title: "Movie Finder",
        description: "Find your favorite movie's plot, ratings, cast and more",
        tags: ["React","Nodejs", "MongoDB", "Tailwind", "Redux Toolkit"],
        image: MovieFinder,
        URL: "https://movie-finder-lyart.vercel.app/",
    }, 
] as const;

export const skillsData = ["React", "Node.js", "Git","MongoDB", "Express", "SQL","Framer Motion", "Bash" ,"Java"] as const;
