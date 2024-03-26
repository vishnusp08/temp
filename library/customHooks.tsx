"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ContextData } from "@/context/activeContext";
import { links } from "./data";
type Sometype = {
    thres: number;
    sectionTag: (typeof links)[number]["hash"];
};
export function useSectionInview({ thres, sectionTag }: Sometype) {
    // i take the changing values as a parameter
    const [ref, inView] = useInView({ threshold: thres }); // use the useInView hook to keep track of the element in viewport
    const { setActiveState, timeOfLastClick } = ContextData();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 800) setActiveState(sectionTag); // if no click is made on the header then the data.now will be more than 1000 hence the statement is executed any how. It is not executed when the click is made as the timeOfLastClick is almost 1000 seconds less
        // than the current time hence this doesn't get executed when click is made.
    }, [inView, setActiveState, timeOfLastClick, sectionTag]);

    return { ref, inView }; //returning the reference pointer to the components so that it can be attached to the dom element that needs to be tracked in the viewport
}
