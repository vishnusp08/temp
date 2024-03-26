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
                    Hey there! I&apos;m <strong>Prajwal</strong>, a passionate CS undergraduate and a <strong>full stack developer</strong>. I have a knack for building robust and scalable web applications using modern technologies. With a keen interest in problem-solving, I thrive on challenges and love
                    to tackle complex problems.
                </p>

                <p>
                    <strong>My Tech Stack:</strong>
                    <br /> <em>Favorite Languages:</em> <strong>Java</strong> and <strong>TypeScript</strong>
                    <br /> <em>Editor of Choice:</em> <strong>Neovim</strong>
                    <br /> <em>Core Stack:</em> <strong>Next.js</strong>, <strong>React</strong>, <strong>MongoDB</strong>, <strong>Node.js</strong>, and <strong>TailwindCSS</strong>
                </p>

                <p>
                    <strong>Why I Love What I Do:</strong>
                    <br />I am deeply passionate about technology and its potential to shape the world. Whether it&apos;s creating intuitive user interfaces or designing efficient backend systems, I find joy in every step of the development process.
                </p>
            </section>
        </motion.main>
    );
}
