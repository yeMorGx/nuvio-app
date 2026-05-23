import { SearchBar } from "@/components/header/ui/searchBar";
import { Profile } from "@/components/header/ui/profile";
import { Notifications } from "@/components/header/ui/notifications";

import { Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export function Header() {
  return (
    <header
      className="
      px-10
      bg-(--sidebar) 
      flex items-center p-5 gap-5 justify-between
      border-b border-(--sidebar-border)
    "
    >
      <div>
        <Notifications />
      </div>

      <div className="flex items-center gap-5">
        <div>
          <SearchBar />
        </div>

        <div>
          <Profile />
        </div>
      </div>

      
    </header>
  );
}
