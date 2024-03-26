"use client";
import Section_headers from "./Section_headers";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/library/data";
import React from "react";
import { useSectionInview } from "@/library/customHooks";

export function Experience() {
    const { ref, inView } = useSectionInview({ thres: 0.4, sectionTag: "#experience" });
    return (
        <main className="scroll-mt-36 max-w-[58rem] mx-auto w-full mb-28 sm:mb-0" id="experience" ref={ref}>
            <Section_headers>Experience</Section_headers>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={inView}
                            contentArrowStyle={{ borderRight: "0.5rem solid gray" }}
                            icon={item.icon}
                            date={item.date}
                            contentStyle={{ marginTop: "0", textAlign: "left", padding: "1.3rem 2rem", background: "#f3f4f6", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "none" }} // 7 percent opacity
                            iconStyle={{ background: "white", color: "#000", fontSize: "1.5rem" }}
                        >
                            <p className="!font-semibold capitalize !mt-0">{item.title}</p>
                            <p className="!mt-0 !font-normal !text-gray-600 !text-sm">{item.location}</p>
                            <p className="!text-gray-700 !font-normal">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </main>
    );
}
