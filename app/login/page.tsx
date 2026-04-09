import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display ({ subsets: ["latin"], style: ["normal", "italic"], });

export default function Login() {
    return (
    <main className="bg-gray-950 h-screen flex items-center justify-center">
        <div className={`${montserrat.className} w-full max-w-md p-8 rounded-lg shadow-lg`}>
            <h1 className="text-4xl font-bold text-white">Wellcome to <span className={`${playfairDisplay.className} italic`}>Nuvio</span>!</h1>
            <div>
            <p className="text-gray-400 mt-2">Login to your account! ☁️</p>
            </div>
            <form action="">
                <input type="email" placeholder="Email" className="outline-none w-full p-2 mt-4 rounded-md bg-gray-800 text-white"/>
                <input type="password" placeholder="Password" className="focus:ring-1 focus:ring-blue-500 outline-none w-full p-2 mt-4 rounded-md bg-gray-800 text-white"/>
                <button type="submit" className="w-full p-2 mt-4 bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer">
                    Login
                </button>
            </form>
        </div>
    </main>
    );
}