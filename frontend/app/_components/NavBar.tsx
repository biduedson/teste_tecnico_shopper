"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const router = useRouter();
  const [openNav, setOpenNave] = useState(false);
  console.log(openNav);

  return (
    <nav className="fixed top-0 flex z-40   items-center justify-around p-6 bg-slate-800 w-screen ">
      <div
        className={
          openNav ? " h-full w-full bg-black/20 fixed top-0 z-40" : "hidden"
        }
      ></div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: openNav ? "70%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={
          openNav
            ? "  bg-purple-600 fixed top-24 right-0 w-[70%]   flex flex-col shadow-lg z-50 shadow-slate-950"
            : "hidden"
        }
      >
        <ul>
          <li>
            <ul className=" flex  flex-col gap-4 text-center my-8 ">
              <li
                onClick={() => {
                  setOpenNave(false);
                  router.push("/");
                }}
              >
                <p className="text-xl font-bold text-white cursor-pointer">
                  Inicio
                </p>
              </li>
              <li
                onClick={() => {
                  setOpenNave(false);
                  router.push("/travelhistory");
                }}
              >
                <p className="text-xl font-bold text-white cursor-pointer">
                  Histórico de viagens
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </motion.div>
      <div
        className="text-lg font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://landing.shopper.com.br/static/media/logo-original.c7089ad32bcf61645d35.webp"
          width={180}
          height={70}
          alt=""
        />
      </div>
      <nav className="z-50 hidden lg:flex">
        <ul>
          <li>
            <ul className=" flex gap-8 ">
              <li
                onClick={() => {
                  router.push("/");
                }}
              >
                <p className="text-xl font-bold text-purple-600 cursor-pointer">
                  Inicio
                </p>
              </li>
              <li onClick={() => router.push("/travelhistory")}>
                <p className="text-xl font-bold text-purple-600 cursor-pointer">
                  Histórico de viagens
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="z-50 lg:hidden" onClick={() => setOpenNave(!openNav)}>
        <IoMenu className="text-white text-[40px] " />
      </div>
    </nav>
  );
};

export default NavBar;
