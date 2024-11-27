"use client";
import { motion } from "framer-motion";
import FormUser from "./_components/FormUser";
import { fadeIn } from "./_lib/variants";

export default function Home() {
  return (
    <motion.section
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className=" flex w-screen h-screen bg-gradient-to-b from-blue-600 to-purple-600 items-center justify-center text-white"
    >
      <FormUser />
    </motion.section>
  );
}
