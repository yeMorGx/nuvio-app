import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <div className="flex items-center gap-3 border rounded-full px-1.5 py-1.5 border-[#005c2e] transition-colors w-full max-w-md focus:shadow-lg focus-within:border-[#00411f]">
      {/* Icon Container - Ensures a perfect circle */}
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#005c2e] text-white cursor-pointer shrink-0 hover:bg-[#00411f] transition-colors">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-4" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Buscar..."
        className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 py-1"
      />
    </div>
  );
}