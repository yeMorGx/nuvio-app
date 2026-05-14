"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { Montserrat, Playfair_Display, Doto, Syne_Mono, Bytesized } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
const doto = Doto({ subsets: ["latin"] });
const syneMono = Syne_Mono({ subsets: ["latin"], weight: "400" });
const bytesized = Bytesized({ subsets: ["latin"], weight: "400" });

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const fontes = [montserrat.className, playfairDisplay.className, doto.className, syneMono.className, bytesized.className];
    const [index, setIndex] = useState(0);
    const [ativo, setAtivo] = useState(false);

     const togglePassword = () => {
    setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        if (!ativo) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % fontes.length);
        }, 300); // mais rápido fica mais daora no botão

        return () => clearInterval(interval);
    }, [ativo, fontes.length]);

    return (
        // Geral container
        <main className="bg-gray-950 h-screen flex items-center justify-center">
            {/* Login container */}
            <div className={`${montserrat.className} w-full max-w-md p-8 rounded-lg shadow-lg`}>
                {/* Logo e título */}
                <h1 className="text-4xl font-bold text-white">Wellcome to <span className={`${playfairDisplay.className} italic`}>Nuvio</span>!</h1>
                {/* Subtítulo */}
                <div>
                    <p className="text-gray-400 mt-2">Login to your account! ☁️</p>
                </div>
                {/* Formulário de login */}
                <form action="">
                    {/* Campo de email */}
                    <input required type="email" placeholder="Email" className="outline-none w-full p-2 mt-4 rounded-md bg-gray-800 text-white" />
                    {/* Campo de senha */}
                    <input required type="password" placeholder="Password" className="focus:ring-1 focus:ring-blue-500 outline-none w-full p-2 mt-4 rounded-md bg-gray-800 text-white"/>
                    {/* Checkbox de termos */}
                    <div>
                        <input required type="checkbox" name="Terms" id="Terms" className='mt-4'/>
                        <label htmlFor="Terms" className="text-gray-400 ml-2 text-xs">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></label>
                    </div>
                    {/* Botão de login */}
                    <button type="submit" onMouseEnter={() => setAtivo(true)} onMouseLeave={() => setAtivo(false)} className={`${fontes[index]} w-full p-2 mt-4 bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer`}>
                        Login
                    </button>
                    <p className="text-white flex items-center justify-center gap-2 p-2">Or</p>
                    {/* Botão do Microsoft e Google */}
                    <div className="flex items-center justify-center gap-4">
                    <button className={`${fontes[index]} transition-colors duration-300 hover:text-black text-white p-3 bg-transparent border border-white text-black rounded-md hover:bg-white cursor-pointer flex items-center justify-center gap-2`}>
                        <FontAwesomeIcon icon={faGoogle}/>
                    </button>
                    <button className={`${fontes[index]} transition-colors duration-300 hover:text-black text-white p-3 bg-transparent border border-white text-black rounded-md hover:bg-white cursor-pointer flex items-center justify-center gap-2`}>
                        <FontAwesomeIcon icon={faMicrosoft}/>
                    </button>
                    </div>
                </form>
            </div>
        </main>
    );
}