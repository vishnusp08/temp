import Section_headers from "./Section_headers";
import { projectsData } from "@/library/data";
import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <main className="w-full max-w-2xl mx-auto">
      <Section_headers>My Projects</Section_headers>
      <section>
        {projectsData.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <Project {...item} />
            </React.Fragment>
          );
        })}
      </section>
    </main>
  );
}

type ProjectProp = (typeof projectsData)[number]; // not clear whats happening here
function Project({ title, description, tags, image }: ProjectProp) {
  return (
    <main className="hover:bg-gray-200 group relative flex h-[20rem] w-full bg-slate-100 p-3 overflow-hidden rounded-lg sm:mb-6 mb-8 border border-black/5 last:mb-0">
      <section className="flex flex-col w-1/2 h-full pt-4 pl-4 group-even:ml-[21rem] pb-7 ">
        <span className="mb-5 text-2xl font-semibold">{title}</span>
        <span className="mb-10 text-gray-700">{description}</span>
        <ul className="flex flex-wrap items-center mt-auto gap-3">
          {tags.map((item, index) => (
            <li
              key={index}
              className="px-2 py-1 text-sm text-white bg-gray-700 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
      <Image
        src={image}
        alt={title}
        quality="90"
        className="group-hover:-rotate-1 group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-[1.05] transition absolute top-10 right-[-20px] object-cover h-[20rem] w-[20rem] rounded-2xl shadow-lg"
      />
    </main>
  );
}
