"use client"; // i am adding this because the next js treats all folder in the root directory as server components but the framer motion needs react hooks which are not available in server components
import { motion } from "framer-motion";
import { links } from "@/library/data";
import Link from "next/link";
import { ContextData } from "@/context/activeContext";

export default function Header() {
    const { activeState, setActiveState, setTheTime } = ContextData(); // gets the value of the context data without usage of the useContext hook

    return (
        <motion.header className="shadow-lg fixed left-1/2 sm:top-[2rem] top-0 sm:w-[40rem] bg-white w-full sm:rounded-full z-[100]" initial={{ y: -110, x: "-50%", opacity: 0 }} animate={{ y: 3, x: "-50%", opacity: 0.937 }}>
            <ul className="flex flex-wrap items-center justify-around w-full h-auto p-2 font-semibold transition-all sm:p-0 sm:h-14 box-border">
                {links.map((item) => (
                    <Link
                        key={item.hash}
                        href={item.hash}
                        onClick={() => {
                            setActiveState(item.hash);
                            setTheTime(Date.now()); // this will set current time in terms of milliseconds and if from the point of click to the destination section takes more than 1 second (1000) then we assign the section using the setActiveState. For example look at the about.tsx ,there we not
                            // only check if the inView true but also check if the time from click to the destination has taken more than 1 second
                        }}
                    >
                        <motion.li className={`box-border text-gray-600 px-4 py-2 rounded-full hover:text-gray-900 transition ${activeState == item.hash && "bg-slate-200"}`}>{item.name}</motion.li>
                    </Link>
                ))}
            </ul>
        </motion.header>
    );
}
