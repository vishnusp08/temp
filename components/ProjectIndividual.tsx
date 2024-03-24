"use client";
import { useRef } from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/library/data";
type ProjectProp = (typeof projectsData)[number]; // not clear whats happening here
export default function Project({ title, description, tags, image, URL }: ProjectProp) {
    const ref = useRef<HTMLAnchorElement>(null); // the reference is to the anchor tag , and reference is of the type HTMLAnchorElement. The target in the useScroll expects a HTMLElement with value null and if i don't specify null then if will take it as undefined which is not the value it was expecting
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"], // 0 indicated the viewport bottom line and 1 indicates the top line of the target component (i.e the card "a" tag), the second index of the array indicates 1.33 as the viewport
    }); // a framer-motion hook to create animation when scrolling through the page

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.a
            style={{
                opacity: scaleProgress,
                scale: opacityProgress,
            }}
            ref={ref}
            href={URL}
            target="_blank"
            className={`cursor-pointer hover:bg-gray-200 group relative flex h-[22rem] sm:h-[20rem] w-full bg-slate-100 p-3 overflow-hidden rounded-lg sm:mb-6 mb-8 border border-black/5 last:mb-0`}
        >
            <section className="flex flex-col w-1/2 h-full pt-4 group-odd:pl-4 group-even:ml-[14rem] sm:group-even:ml-[22rem] pb-7 ">
                <span className="mb-5 text-2xl font-semibold">{title}</span>
                <span className="mb-10 text-gray-700">{description}</span>
                <ul className="flex flex-wrap items-center mt-auto gap-3">
                    {tags.map((item, index) => (
                        <li key={index} className="px-2 py-1 text-sm text-white bg-gray-700 rounded-full">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
            <Image
                src={image}
                alt={title}
                quality="90"
                className="group-hover:shadow-2xl group-even:right-0 group-even:left-[-20px] group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2  group-hover:-rotate-1 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-[1.05] transition absolute top-10 right-[-20px] object-cover h-[20rem] w-[13rem] sm:w-[20rem] rounded-2xl shadow-lg"
            />
        </motion.a>
    );
}
