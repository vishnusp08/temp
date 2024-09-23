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
        title: "VVS Sardar Patel High School",
        location: "Bengaluru, Karnataka, India",
        description: "I completed my secondary schooling with a percentage of 83.5% ",
        icon: React.createElement(LuSchool2),
        date: "2017-2018",
    },
    {
        title: "Vidya Mandir IND. PU College",
        location: "Bengaluru, Karnataka, India",
        description: "I completed my pre-university with a percentage of 72.16%",
        icon: React.createElement(TbCertificate),
        date: "2018-2020",
    },
    {
        title: "Global Academy of Technology",
        location: "Bengaluru, Karnataka, India",
        description: "I completed my Computer Science Engineering degree with a CGPA of 7.3",
        icon: React.createElement(LuGraduationCap),
        date: "2020-2024",
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
