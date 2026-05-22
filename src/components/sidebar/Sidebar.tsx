export function Sidebar() {
  return (
    <aside className="w-64 bg-[var(--header)] border-r border-white/10 flex flex-col h-screen">
      
      {/* LOGO */}
      <div className="p-6">
        <h1 className="font-bold text-white tracking-tighter text-lg">
          NUVIO
        </h1>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition"
        >
          Projetos
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition"
        >
          Configurações
        </a>
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-zinc-500 italic">
          v1.0.0
        </p>
      </div>
    </aside>
  );
}