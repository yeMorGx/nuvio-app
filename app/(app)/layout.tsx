"use client";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Montserrat, Playfair_Display, Doto, Syne_Mono, Bytesized } from "next/font/google";
import { useEffect, useState } from "react";

import { ReactNode } from "react";
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { text } from "stream/consumers";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function AppLayout({ children }) {
    return (
        <html>
            <body>
                <header className="border-b border-gray-200 p-4 flex items-center gap-4 ">
                    <div className="flex items-baseline justify-content">
                    <h1 className={`${playfairDisplay.className} text-3xl italic`}>N</h1>
                    <h2 className={`${montserrat.className} font-bold`}>uvio</h2>
                    </div>
                    <div>
                        <i class="fi fi-sr-search"></i>
                        <input className="border p-2 focus:ring-2 focus:ring-blue-500 rounded-xl border-gray-200 bg-transparent outline-none text-gray-400" placeholder="Buscar tickets..."
                        type="text"/>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}