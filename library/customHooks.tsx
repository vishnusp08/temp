import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {ContextData} from "@/context/activeContext";
import {links} from "./data";
type Sometype = {
    thres: number;
    sectionTag: (typeof links)[number]["hash"];
};
export function useSectionInview({thres, sectionTag}: Sometype) {
    const [ref, inView] = useInView({threshold: thres});
    const {setActiveState, timeOfLastClick} = ContextData();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) setActiveState(sectionTag);
    }, [inView, setActiveState, timeOfLastClick, sectionTag]);

    return ref;
}
