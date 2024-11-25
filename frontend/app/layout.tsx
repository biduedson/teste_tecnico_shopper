import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
//components

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Teste técnico Shoppe",
  description: "Developed by EGAdesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${oswald.variable} ${roboto.variable} w-screen max-w-[1920px] min-h-full  bg-slate-950 `}
        >
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
