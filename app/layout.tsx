"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Montserrat, Playfair_Display, Doto, Syne_Mono, Bytesized } from "next/font/google";
import { useEffect, useState } from "react";

import "./globals.css";
import { ReactNode } from "react";
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div>
          <aside className="h-screen w-20 bg-gray-900 top-0 left-0 fixed">
            <div className="border-b border-gray-700">
              <h1 className="text-white text-2xl font-bold p-4">Perfil</h1>
            </div>
            <nav className="h-full flex flex-col">
              <ul className="p-4"><a href="/dashboard"><li className="bg-blue-500 w-fit rounded-xl flex items-center justify-center p-2">
                <FontAwesomeIcon icon={faHouse} className="text-white"/></li></a></ul>
            </nav>
          </aside>
        </div>
        {children}
      </body>
    </html>
  );
}