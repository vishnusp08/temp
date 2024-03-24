import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveStateContext from "@/context/activeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Prajwal | Portfolio",
    description: "About me",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            {/* this scroll smooth adds a smooth scrolling when the in page url is accessed using the id */}
            {/*the exlamation mark forces the property to be overriden in tailwind utility classes*/}
            <body className={`${inter.className} relative bg-slate-50 sm:pt-[10rem] pt-[7rem]`}>
                <div className="-z-10 bg-green-100 blur-[30rem] full w-[50rem] h-[35rem] rounded-full absolute top-[2rem] left-[10rem] "></div>
                <div className="-z-10 bg-purple-100 w-[50rem] blur-[30rem] h-[35rem] rounded-full right-[20rem] absolute top-[6rem]"></div>
                <ActiveStateContext children={children} />
            </body>
        </html>
    );
}
