"use client";
import Image from "next/image";
import { MdContactMail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import myImage from "@/public/My_photo.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInview } from "@/library/customHooks";
import { ContextData } from "@/context/activeContext";

export default function Intro() {
    const { ref } = useSectionInview({ thres: 0.4, sectionTag: "#home" });
    const { setTheTime, setActiveState } = ContextData();
    return (
        <main
            className="flex flex-col items-center text-center sm:mb-0 gap-[3rem] sm:gap-[4rem] mb-28 scroll-mt-36"
            id="home"
            ref={ref}
        >
            <motion.section
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
            >
                <Image
                    src={myImage}
                    alt="Vishnu SP"
                    quality="95"
                    priority={true}
                    className="w-24 h-24 border-[0.2rem] object-cover rounded-full border-violet-800 shadow-lg"
                />
                <motion.span
                    className="absolute bottom-0 right-0 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 130,
                        delay: 0.2,
                        duration: 0.4,
                    }}
                >
                    👋
                </motion.span>
            </motion.section>
            <motion.h1
                className="flex flex-col items-center text-2xl sm:text-4xl !leading-[2.5rem]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <span>
                    Hi, I&apos;m <b>Vishnu</b>. I&apos;m a <b>Computer Science Engineer</b>.
                </span>
                <p>
                    I am passionate about <strong>data analysis</strong> and <strong>problem-solving</strong>.
                    <br />
                    My academic journey has honed my <em>programming</em>, <em>communication</em>, <em>management</em>, and <em>web design skills</em>.
                </p>
            </motion.h1>
            <motion.section
                className="flex flex-col items-center w-full text-center sm:w-auto sm:justify-center sm:flex-row gap-6"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.125 }}
            >
                <a
                    className="flex items-center justify-center w-3/4 px-8 py-3 text-lg font-semibold text-black bg-white border rounded-full shadow-lg cursor-pointer sm:w-auto border-black/10 group gap-3 active:scale-105 transition hover:scale-110 whitespace-nowrap dark:bg-opacity-30 dark:backdrop-blur-[0.5rem] dark:text-gray-200"
                    href="/My_resume.pdf"
                    download={true}
                >
                    <div>Download Resume</div>
                    <IoMdDownload className="text-2xl opacity-60 group-hover:translate-y-1 transition " />
                </a>

                <a
                    className="p-3 bg-white border flex items-center justify-center sm:w-auto w-3/4 rounded-full shadow-lg hover:scale-110 sm:hover:scale-[1.15] active:scale-105 transition border-black/10 backdrop-blur-[0.5rem] bg-opacity-30"
                    href="https://www.linkedin.com/in/vishnu-sp-48524127b/"
                    target="_blank"
                >
                    <FaLinkedin className="text-2xl dark:text-white" />
                </a>
            </motion.section>
        </main>
    );
}

