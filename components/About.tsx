"use client";
import Section_headers from "@/components/Section_headers";
import { motion } from "framer-motion";
import { useSectionInview } from "@/library/customHooks";

export default function About() {
    const { ref } = useSectionInview({ thres: 0.8, sectionTag: "#about" });
    return (
        <motion.main
            ref={ref}
            id="about" // when I add an id equal to the route, the routes point to this section of the page
            className="w-full max-w-5xl mx-auto mb-28 sm:mb-0 scroll-mt-36"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
        >
            <Section_headers>About Me</Section_headers>
            <section className="text-lg text-center leading-8">
                <p>
                    I am committed to leveraging technology to drive innovation and deliver impactful solutions, particularly in fields like <strong>AI</strong>, <strong>Data Science</strong>, and beyond.
                    <br />
                    With a keen interest in learning <strong>emerging technologies</strong>, I aim to expand my skill set and contribute to projects that challenge my abilities.
                    <br />
                    I thrive in <em>collaborative environments</em>, but I’m equally driven in independent tasks, always pushing for efficiency and accuracy.
                    <br />
                    As I continue to grow in my career, I am eager to apply my knowledge and creativity to <strong>real-world problems</strong> and make a lasting impact through technology.
                </p>
            </section>
        </motion.main>
    );
}

