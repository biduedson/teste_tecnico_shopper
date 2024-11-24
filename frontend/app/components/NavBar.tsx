"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex    items-center justify-center p-6 bg-slate-800 w-screen ">
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
    </nav>
  );
};

export default NavBar;
