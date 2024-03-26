"use client";
import { useSectionInview } from "@/library/customHooks";
import Section_headers from "./Section_headers";
import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/Actions";
import Btn from "./btn-comp";
import toast from "react-hot-toast";
export default function Contact() {
    const { ref } = useSectionInview({ thres: 0.8, sectionTag: "#contact" });
    return (
        <motion.main ref={ref} className="max-w-4xl mx-auto w-full mb-28" id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}>
            <Section_headers>Contact Me</Section_headers>

            <form
                className="max-w-lg w-full mx-auto flex flex-col gap-3 justify-center"
                action={async (formData) => {
                    // this is far more easy than traditional react where the states had to be maintained for onChange of the input componentes to just retreive the entered details
                    type dataNError = { data?: any; error?: any };
                    const { data, error }: dataNError = await sendEmail(formData);
                    if (error) {
                        toast.error(error, { position: "top-right" });
                        return;
                    }
                    toast.success("E-mail send successfully", { position: "top-right" });
                }}
            >
                <p className="text-center">
                    Please contact me at{" "}
                    <a href="mailto:prajw4l@gmail.com" className="underline">
                        prajw4l@gmail.com
                    </a>{" "}
                    or through this form
                </p>
                <input type="email" required maxLength={100} placeholder="Your email" className="p-3  rounded-md border border-black/10 dark:bg-neutral-200 dark:focus:bg-white text-black" name="email" />
                <textarea placeholder="Your message" required className="text-black h-[11rem] p-3 rounded-md border-black/10 border dark:bg-neutral-200 dark:focus:bg-white" name="message"></textarea>
                <p className=" w-full flex justify-center items-center">
                    <Btn />
                </p>
            </form>
        </motion.main>
    );
}
