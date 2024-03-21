import Section_headers from "./Section_headers";
import React from "react";
import Project from "./ProjectIndividual";
import { projectsData } from "@/library/data";
export default function Projects() {
  return (
    <main
      className="w-full max-w-2xl mx-auto scroll-mt-40 mb-28 sm:mb-0"
      id="projects"
    >
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
