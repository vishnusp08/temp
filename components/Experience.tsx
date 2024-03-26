"use client";
import Section_headers from "./Section_headers";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/library/data";
import React from "react";
import { useSectionInview } from "@/library/customHooks";
import { themeState } from "@/context/themeContext";
export default function Experience() {
    const { ref, inView } = useSectionInview({ thres: 0.4, sectionTag: "#experience" });
    const { theme } = themeState();
    return (
        <main className="scroll-mt-36 max-w-[58rem] mx-auto w-full mb-28 sm:mb-0" id="experience" ref={ref}>
            <Section_headers>Education &amp; Experience</Section_headers>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={inView}
                            contentArrowStyle={{ borderRight: "0.5rem solid gray" }}
                            icon={item.icon}
                            date={item.date}
                            contentStyle={{ marginTop: "0", textAlign: "left", padding: "1.3rem 2rem", backgroundColor: theme === "light" ? "#f3f4f6" : "#1d2432", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "none" }} // 7 percent opacity
                            iconStyle={{ opacity: theme === "light" ? "1" : "0.7", backgroundColor: theme === "light" ? "white" : "#1d2432", color: theme === "light" ? "#000" : "#fff", fontSize: "1.5rem" }}
                        >
                            <p className="!font-semibold capitalize !mt-0 dark:!text-gray-100">{item.title}</p>
                            <p className="!mt-0 !font-normal !text-gray-600 !text-sm dark:!text-gray-100">{item.location}</p>
                            <p className="!text-gray-700 !font-normal dark:!text-gray-100">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </main>
    );
}
