"use client";
import Section_headers from "@/components/Section_headers";
import {motion} from "framer-motion";
import {useSectionInview} from "@/library/customHooks";
export default function About() {
    const {ref} = useSectionInview({thres: 0.8, sectionTag: "#about"});
    return (
        <motion.main
            ref={ref}
            id="about" // when I add  an id equal to the route, the routes points to this section of the page
            className="w-full max-w-5xl mx-auto mb-28 sm:mb-0 scroll-mt-36"
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.15}}
        >
            <Section_headers>About Me</Section_headers>
            <section className="text-lg text-center leading-8">
                <p>
                    I&apos;m <strong>Vishnu</strong>, i am a<strong>Computer Science undergraduate</strong>. I have keen interest  in AIML and Web applications</p>
                <p>
                    <strong>My Tech Stack:</strong>
                    <br /> <em>Favorite Languages:</em> <strong>Java</strong>
                </p>

                <p>
                    <strong>Why I Love What I Do:</strong>
                    <br />I like building AIML projects.
                </p>
            </section>
        </motion.main>
    );
}
