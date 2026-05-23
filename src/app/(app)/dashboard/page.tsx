import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Dashboard - Nuvio",
  description: "Dashboard page",
};

export default function Dashboard() {
    return (
        <div className="
        min-h-screen p-10 text-white
        bg-[var(--background)]
        overflow-x
        ">
            <section className="">
            <h1 className="text-5xl text-(--foreground)">Dashboard</h1>
            <p className={`text-3xl text-zinc-500 italic ${playfairDisplay.className}`}>Bem-vindo de volta, Gabriel! ☁️</p>
            </section>
        </div>
    );
}