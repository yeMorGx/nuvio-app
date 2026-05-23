import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";

import { Card } from "@/components/dashboard/ui/card";
import Table from "@/components/dashboard/ui/table";
import Recents from "@/components/dashboard/ui/recents";
import  Actions  from "@/components/dashboard/ui/actions";

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
        bg-(--background)
        overflow-x-auto
        ">
            <section className="">
            <h1 className="text-5xl text-(--foreground)">Dashboard</h1>
            <p className={`text-3xl text-zinc-500 italic ${playfairDisplay.className}`}>Bem-vindo de volta, Gabriel! ☁️</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
            <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
    value={128}
    title="Abertos"
    percent="+12%"
/>

<Card
    value={89}
    title="Em atendimento"
    percent="+5%"
/>

<Card
    value={45}
    title="Pendentes"
    percent="+2%"
/>

<Card
    value={14}
    title="Análises"
    percent="+18%"
/>
            </section>

            <section>
                <Table />
            </section>
            </div>
            <section>
                <Recents />
                <Actions />
            </section>
            </div>
        </div>
    );
}