// this is a different component because the useFormStatus hook has to be used within the form element but hook cannot be used inside of the jsx hence we export the btn compoenet and also usage of this useFormStatus is possible. useFormStatus porvides the porcessing state of the form with a boolean
// value
import {FaRegPaperPlane} from "react-icons/fa";
import {useFormStatus} from "react-dom";
export default function Btn() {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending} className={"group hover:scale-110 active:scale-105 transition rounded-full text-base font-semibold h-[3rem] w-[8rem] bg-black text-white flex justify-center gap-2 items-center disabled:opacity-75 disabled:scale-100 dark:bg-gray-700"}>
            {!pending ? (
                <>
                    <p> Submit</p>
                    <p className="group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                        <FaRegPaperPlane />
                    </p>
                </>
            ) : (
                <div className="h-5 w-5 animate-spin border-t-2 border-white rounded-full box-border"></div> // this is a spinner
            )}
        </button>
    );
}
