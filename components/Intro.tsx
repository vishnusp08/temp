"use client";
import Image from "next/image";
import {MdContactMail} from "react-icons/md";
import {IoMdDownload} from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import myImage from "@/public/My_photo.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {useSectionInview} from "@/library/customHooks";
import {ContextData} from "@/context/activeContext";
export default function Intro() {
    const {ref} = useSectionInview({thres: 0.4, sectionTag: "#home"});
    const {setTheTime, setActiveState} = ContextData();
    return (
        <main
            className="flex flex-col items-center text-center sm:mb-0 gap-[3rem] sm:gap-[4rem] mb-28 scroll-mt-36" //When you navigate to a specific element on a page using a URL fragment (e.g., #section2), the browser scrolls the target element to the top of the viewport. However, if there's a fixed header or you want to add some space between the top of the viewport and the target element, you can use scroll-margin-top to achieve this.
            id="home"
            ref={ref}
        >
            {/*parent container*/}
            <motion.section // child  1
                className="relative"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween", //this is the boucy effect of the component. Tween doesn't bounce but just renders smoothly,think of it like opposite ot spring effect
                    duration: 0.2,
                }}
            >
                <Image //it is the nextjs component that is better than the traditional img tag
                    src={myImage}
                    alt="Prajwal Gowda G"
                    quality="95"
                    priority={true}
                    className="w-24 h-24 border-[0.2rem] object-cover rounded-full border-violet-800 shadow-lg"
                />
                <motion.span
                    className="absolute bottom-0 right-0 text-2xl"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 130, //as the name says the stiffness  effect can be seen
                        delay: 0.2, // it is the delay of rendernig of the component on the screen
                        duration: 0.4, // it is the amount of time is will take to complete it's rendering from start to finish
                    }}
                >
                    👋
                </motion.span>
            </motion.section>
            <motion.h1 // child 2
                className="flex flex-col items-center text-2xl sm:text-4xl !leading-[2.5rem]"
                initial={{y: 40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
            >
                <span>
                    Hi, I&apos;m <b>Vishnu</b>. I&apos;m a <b>Computer science undergraduate</b>.
                </span>
                <p>
                    I love to program in <b>Java </b>&amp; <b>TypeScript</b>. <br></br>My stack is{" "}
                    <i>
                        <b>MERN(Next.js)</b>
                    </i>
                </p>
            </motion.h1>
            <motion.section //child 3
                className="flex flex-col items-center w-full text-center smw-auto sm:justify-center sm:flex-row gap-6"
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.125}}
            >
                <a
                    className="flex items-center justify-center w-3/4 px-8 py-3 text-lg font-semibold text-black bg-white border rounded-full shadow-lg cursor-pointer sm:w-auto border-black/10 group gap-3 active:scale-105 transition hover:scale-110 whitespace-nowrap dark:bg-opacity-30 dark:backdrop-blur-[0.5rem] dark:text-gray-200"
                    href="/My_resume.pdf"
                    download={true} // downloads the file instead of just opening the file in the window
                // the slash "/" in nextjs just points to the public directory as it is generally used to store static files
                >
                    <div>Download Resume</div>
                    <IoMdDownload className="text-2xl opacity-60 group-hover:translate-y-1 transition " />
                </a>

                {
                    // <a className="w-3/4  flex items-center justify-center sm:w-auto p-3  bg-white border rounded-full shadow-lg hover:scale-110 sm:hover:scale-[1.15] active:scale-105 transition border-black/10 dark:bg-white/[.25] backdrop-blur-[0.5]" href="" target="_blank">
                    // <FaLinkedin className="text-2xl " />
                    // </a>
                }

                <a className="p-3 bg-white border flex items-center justify-center sm:w-auto w-3/4 rounded-full shadow-lg hover:scale-110 sm:hover:scale-[1.15] active:scale-105 transition border-black/10 backdrop-blur-[0.5rem] bg-opacity-30 " href="https://www.linkedin.com/in/vishnu-sp-48524127b/" target="_blank">
                    <FaLinkedin className="text-2xl dark:text-white" />
                </a>
            </motion.section>
        </main>
    );
}
