import Intro from "@/components/Intro";
import About from "@/components/About";
import Section from "@/components/Section_divider";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Section />
            <Projects />
            <Section />
<Skills/>
            <Section />
            <Experience />
        </main>
    );
}
