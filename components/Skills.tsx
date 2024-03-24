"use client";
import {skillsData} from "@/library/data";
import Section_headers from "@/components/Section_headers";
import {useEffect} from "react";
import {ContextData} from "@/context/activeContext";
import {useInView} from "react-intersection-observer";
export default function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.9,
    });
    const {setActiveState, timeOfLastClick} = ContextData();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) setActiveState("#skills");
    }, [inView, setActiveState, timeOfLastClick]);
    return (
        <main id="skills" className="scroll-mt-36" ref={ref}>
            <Section_headers>Skills</Section_headers>
            <ul className="flex flex-wrap items-center justify-center max-w-4xl gap-7">
                {skillsData.map((item) => (
                    <li key={item} className="px-3 py-2 tracking-widest border shadow-md rounded-md bg-slate-50 border-black/10">
                        {item}
                    </li>
                ))}
            </ul>
        </main>
    );
}
