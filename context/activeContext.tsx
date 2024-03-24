"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import Header from "@/components/Header";
import { links } from "@/library/data";
type SectionsType = (typeof links)[number]["hash"]; // the links is a array of objects. So first brackets gives the object and the second brackets gives the property "hash" of the object. We take all the hashes and make it the types acceptable by useState function.
type ActiveSectionContextType = {
    activeState: SectionsType;
    setActiveState: Dispatch<SetStateAction<SectionsType>>;
    timeOfLastClick: number;
    setTheTime: Dispatch<SetStateAction<number>>;
};
// we take createContext default value to be null because this value can be accessed by components that are not under the Provider and we don't want that to happen as it might cause some undesirable outputs.
const HeaderActiveContext = createContext<ActiveSectionContextType | null>(null); // we are specifying that the context that is being passed to the components are of the type SectionsType and Dispatch. We use union operator to specify that it can also be null
export default function ActiveStateContext({ children }: { children: ReactNode }) {
    // the children component is destructured here. When we normally destructure there can be other elements too, so specifying it as `{children} : ReactNode` is not right as it
    //However, in your component declaration, you're using destructuring to extract the children prop from the props object. In TypeScript, when you destructure props, you need to specify the type of the entire props object, including the children prop. Therefore, you should specify the type of the entire props object as an object with a children property of type ReactNode, like this:
    const [activeState, setActiveState] = useState<SectionsType>("#home"); // the state can be one of the sections which are #home,#about,#skills,#contact,#contact,#projects.
    const [timeOfLastClick, setTheTime] = useState<number>(0);
    return (
        <HeaderActiveContext.Provider value={{ activeState, setActiveState, timeOfLastClick, setTheTime }}>
            <Header />
            {children}
        </HeaderActiveContext.Provider>
    );
}

export const ContextData = () => {
    // so here the context data passed is checked if it's null , if it is not null then it is returned as it is
    const context = useContext(HeaderActiveContext); // the context data is null only for components that are not under the provider. Meaning these components don't have access to the context hence this value of null be will for those components. But for components that can accesss the context data
    // those we give it using the return of the context data from this hook
    if (context === null) throw new Error("Nah that is a context which is not passed the child component");
    return context;
};
