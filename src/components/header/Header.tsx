import { SearchBar } from "@/components/ui/searchBar";

export function Header() {
  return (
    <header className="bg-(--header) border-b b-white/50 p-5 flex">
        <div className="text-xl font-bold">Logo Cliente</div>

        <div>
          <SearchBar />
        </div>
          
    </header>
  )
}