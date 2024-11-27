"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 flex z-50   items-center justify-around p-6 bg-slate-800 w-screen ">
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
      <nav className="z-50">
        <ul>
          <li>
            <ul className=" flex gap-8 ">
              <li onClick={() => router.push("/")}>
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
    </nav>
  );
};

export default NavBar;
