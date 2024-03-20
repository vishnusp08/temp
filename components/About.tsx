"use client";
import Section_headers from "@/components/Section_headers";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.main
      className="w-full max-w-5xl mx-auto mb-28 sm:mb-0"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <Section_headers>About Me</Section_headers>
      <section className="text-lg text-center leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi
        minima vel mollitia modi perspiciatis quia dicta, magnam autem officiis
        adipisci quasi ad, cupiditate consectetur ea odit aspernatur dolores
        eius officia. Dicta ipsam at nostrum aliquid explicabo nisi cupiditate,
        vero deserunt molestiae ex dolor harum odio iusto labore aliquam est
        enim quasi, deleniti voluptatum velit corporis placeat. Quos, mollitia
        iste esse debitis nobis dolore praesentium, architecto inventore facilis
        neque at culpa tempore sunt quasi maxime cum veniam quae? Quaerat,
        eligendi.
      </section>
    </motion.main>
  );
}
