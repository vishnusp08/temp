import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ActiveStateContext from "@/context/activeContext";
const inter = Inter({subsets: ["latin"]});
import {Toaster} from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeContext from "@/context/themeContext";
import ThemeSwitcher from "@/components/Theme_switcher";
import {SpeedInsights} from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
    title: "Vishnu | Portfolio",
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
            <body className={`${inter.className} relative bg-slate-50 text-black dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-85 sm:pt-[10rem] pt-[7rem]`}>
                <div className="-z-10 bg-green-100 dark:bg-green-900 blur-[30rem] w-[30rem] -left-[20rem] sm:w-[55rem] h-[35rem] rounded-full absolute top-[2rem] sm:left-[-15rem] md:left-[-10rem] lg:left-[-5rem] xl:left-[20rem]"></div>
                <div className="-z-10 bg-purple-100 dark:bg-[#49063f] dark:blur-[100rem] w-[30rem] sm:w-[55rem] blur-[30rem] h-[35rem] rounded-full right-[12rem] absolute top-[6rem]"></div>
                <SpeedInsights />
                <ThemeContext>
                    <ActiveStateContext>
                        <Toaster />
                        <Header />
                        {children}
                                <Analytics />
                        <ThemeSwitcher />
                        <Footer />
                    </ActiveStateContext>
                </ThemeContext>
            </body>
        </html>
    );
}
