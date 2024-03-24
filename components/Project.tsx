"use client";
import Section_headers from "./Section_headers";
import React, { useEffect, useRef } from "react";
import Project from "./ProjectIndividual";
import { projectsData } from "@/library/data";
import { useSectionInview } from "@/library/customHooks";
export default function Projects() {
    // const {setActiveState, timeOfLastClick} = ContextData();
    // the error i was getting here was : Property 'setActiveState' does not exist on type 'ActiveSectionContextType | null'. (tsserver 2339)
    // so the both of those context passed values can have the value of null hence i have to put a case for that null case.
    const ref = useSectionInview({ thres: 0.47, sectionTag: "#projects" });
    // const [ref, inView] = useInView({
    //     threshold: 0.47,
    // });
    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveState("#projects");
    //     }
    // }, [inView, setActiveState, timeOfLastClick]);

    return (
        <main ref={ref} className="w-full max-w-2xl mx-auto scroll-mt-40 mb-28 sm:mb-0" id="projects">
            <Section_headers>My Projects</Section_headers>
            <section>
                {projectsData.map((item) => {
                    return (
                        <React.Fragment key={item.title}>
                            {/*react Fragment is just an empty tag. div , span or any other tag can be used*/}
                            <Project {...item} />
                        </React.Fragment>
                    );
                })}
            </section>
        </main>
    );
}
