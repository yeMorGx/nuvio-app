export function Sidebar() {
  return (
    <aside className="w-20 bg-(--header) border-r b-white/50 flex flex-col h-screen">
      <div className="p-6">
        <h1 className=" font-bold text-white tracking-tighter">NUVIO</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <a href="#" className="flex items-center p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
          Dashboard
        </a>
        <a href="#" className="flex items-center p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
          Projetos
        </a>
        <a href="#" className="flex items-center p-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
          Configurações
        </a>
      </nav>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-zinc-500 italic">v1.0.0</p>
      </div>
    </aside>
  );
}