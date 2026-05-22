import { SearchBar } from "@/components/ui/searchBar";
import { Profile } from "@/components/ui/profile";
import {Playfair_Display} from "next/font/google";
import Image from "next/image";
  
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
}); 

export function Header() {
  return (
    <header className="bg-(--header) flex items-center border-b b-white/50 p-5 gap-5">
        <Image src="/N.svg" alt="Logo" width={40} height={40} className="cursor-pointer" />

        <div>
          <SearchBar />
        </div>

        <div>
          <Profile />
        </div>
          
    </header>
  )
}