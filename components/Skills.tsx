"use client";
import { skillsData } from "@/library/data";
import Section_headers from "@/components/Section_headers";
import { useSectionInview } from "@/library/customHooks";
import { motion } from "framer-motion";
const framerAnimations = {
    kaka: {
        opacity: 0,
        y: 100,
    },
    ani: {
        opacity: 1,
        y: 0,
    },
};

export default function Skills() {
    const ref = useSectionInview({ thres: 0.9, sectionTag: "#skills" });
    // const [ref, inView] = useInView({
    //     threshold: 0.9,
    // });
    // const {setActiveState, timeOfLastClick} = ContextData();
    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) setActiveState("#skills");
    // }, [inView, setActiveState, timeOfLastClick]);
    return (
        <main id="skills" className="scroll-mt-36" ref={ref}>
            <Section_headers>Skills</Section_headers>
            <ul className="flex flex-wrap items-center justify-center max-w-4xl gap-7">
                {skillsData.map((item, index) => (
                    <motion.li
                        key={item}
                        className="px-3 py-2 tracking-widest border shadow-md rounded-md bg-slate-50 border-black/10"
                        transition={{
                            delay: index * 0.05,
                        }}
                        variants={framerAnimations} // using variants allows us to use state specific properties like whileInView
                        initial="kaka"
                        viewport={{
                            once: true,
                        }}
                        whileInView="ani"
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </main>
    );
}
