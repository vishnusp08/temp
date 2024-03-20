"use client"; // i am adding this because the next js treats all folder in the root directory as server components but the framer motion needs react hooks which are not available in server components
import { motion } from "framer-motion";
import { links } from "@/library/data";
import { useState } from "react";
export default function Header() {
  const [focus, setFocus] = useState("#home");
  return (
    <motion.header
      className="shadow-lg fixed left-1/2 sm:top-[2rem] top-0 sm:w-[40rem] bg-white w-full sm:rounded-full z-[100] "
      initial={{ y: -110, x: "-50%", opacity: 0 }}
      animate={{ y: 3, x: "-50%", opacity: 1 }}
    >
      <ul className="flex flex-wrap items-center justify-center w-full h-auto p-2 font-semibold sm:p-0 sm:h-14 space-x-10 box-border">
        {links.map((item) => (
          <motion.li
            onClick={(e) => {
              setFocus(item.hash);
            }}
            className={`box-border  cursor-pointer ${
              focus == item.hash && "bg-slate-200 px-4 py-2 rounded-full"
            }`}
            key={item.hash}
          >
            {item.name}
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
}
