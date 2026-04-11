"use client";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Montserrat, Playfair_Display, Doto, Syne_Mono, Bytesized } from "next/font/google";
import { useEffect, useState } from "react";

import { ReactNode } from "react";
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function AppLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <div>
                    {/* Sidebar */}
                    <aside className="h-screen w-20 bg-gray-900 top-0 left-0 fixed">
                        {/* sidebar content */}
                        <div className="border-b border-gray-800">
                            {/* Profile */}
                            <div className='flex items-center justify-center'>
                                <a href="/profile"><div className='hover:shadow-lg border-1 border-gray-900 absolute right-2 top-8 z-40 bg-green-500 w-2 h-2 m-4 rounded-full'>
                                    </div></a>
                                <a href="/profile"><div className='hover:shadow-lg  bg-gray-200 w-10 h-10 m-4 rounded-full'>
                                    
                                    
                                    
                                    
                                    </div></a>
                            </div>
                        </div>
                        {/* Navigation */}
                        <nav className="h-full flex flex-col items-center">
                            {/* Navigation items */}
                            <ul className="p-4 flex flex-col gap-4">
                                {/* Dashboard */}
                                <a href="/dashboard">
                                    
                                    <li className="bg-(--cor-principal) hover:bg-(--cor-priHover) hover:rounded-4xl transition-all duration-500 ease-in-out  hover:scale-120 transition transform p-3 w-10 h-10 rounded-xl flex items-center justify-center p-2">
                                        <FontAwesomeIcon icon={faHouse} className="text-white"/>
                                    </li>
                                </a>
                                <a href="/ticket">
                                    <li className="bg-(--cor-principal) hover:bg-(--cor-priHover) hover:rounded-4xl transition-all duration-500 ease-in-out  hover:scale-120 transition transform p-3 w-10 h-10 rounded-xl flex items-center justify-center p-2">
                                        <FontAwesomeIcon icon={faTicket} className="text-white"/>
                                    </li>
                                </a>
                                <a href="/settings">
                                    <li className="bg-(--cor-principal) hover:bg-(--cor-priHover) hover:rounded-4xl transition-all duration-500 ease-in-out  hover:scale-120 transition transform p-3 w-10 h-10 rounded-xl flex items-center justify-center p-2">
                                        <FontAwesomeIcon icon={faGear} className="text-white"/>
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </aside>
                </div>
                {children}
            </body>
        </html>
    );
}