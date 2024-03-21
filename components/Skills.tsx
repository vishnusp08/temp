import { skillsData } from "@/library/data";
import Section_headers from "@/components/Section_headers";
export default function Skills() {
  return (
    <main id="skills" className="scroll-mt-36">
      <Section_headers>Skills</Section_headers>
      <ul className="flex flex-wrap items-center justify-center max-w-4xl gap-7">
        {skillsData.map((item) => (
          <li
            key={item}
            className="px-3 py-2 tracking-widest border shadow-md rounded-md bg-slate-50 border-black/10"
          >
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
