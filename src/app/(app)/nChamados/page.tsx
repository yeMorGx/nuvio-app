"use client";

import {
  Bell,
  ChevronDown,
  FileText,
  Home,
  LifeBuoy,
  Plus,
  Settings,
  Users,
  Upload,
} from "lucide-react";
 
export default function ChamadosPage() {
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      
      <aside className="w-[260px] border-r border-[var(--border)] sidebar-bg p-5 hidden lg:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center text-white shrink-0">
              <svg
                viewBox="0 0 212 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path d="M125.6 151.8L72 54.2C72 54.2 72.1333 53 72.4 50.6C72.6667 48.2 72.9333 45.4667 73.2 42.4C73.4667 39.2 73.7333 36.4 74 34C74.2667 31.6 74.4 30.4 74.4 30.4C75.4667 25.4667 75.8 21.8667 75.4 19.6C75.1333 17.2 73.8 15.6 71.4 14.8C69.1333 13.8667 65.4 13.3333 60.2 13.2L61.2 9.2C63.3333 9.33333 65.9333 9.46667 69 9.6C72.2 9.73333 75.5333 9.79999 79 9.79999C85.2667 9.79999 90.6667 9.6 95.2 9.2L140 96.4C140 96.4 139.733 97.7333 139.2 100.4C138.8 103.067 138.2 106.533 137.4 110.8C136.6 114.933 135.8 119.4 135 124.2C134.2 128.867 133.4 133.333 132.6 137.6C131.8 141.733 131.133 145.133 130.6 147.8C130.2 150.467 130 151.8 130 151.8H125.6ZM187.2 3.39999C183.867 3.39999 180.733 4.46666 177.8 6.6C174.867 8.73333 172.333 11.3333 170.2 14.4C164.067 23.4667 157.8 39.4 151.4 62.2C145 85 137.867 114.867 130 151.8L127.2 146.2C129.2 137.267 131.333 127.667 133.6 117.4C135.867 107 138.267 96.6 140.8 86.2C143.467 75.8 146.133 65.8667 148.8 56.4C151.6 46.9333 154.467 38.4667 157.4 31C160.467 23.4 163.533 17.3333 166.6 12.8C169.133 9.2 172.133 6.2 175.6 3.8C179.067 1.26667 183.267 1.43051e-06 188.2 1.43051e-06C195.267 1.43051e-06 200.933 2.06667 205.2 6.19999C209.467 10.3333 211.6 15.4 211.6 21.4C211.6 27.8 209.4 32.9333 205 36.8C200.733 40.5333 195.467 42.4 189.2 42.4C183.867 42.4 179.533 41.1333 176.2 38.6C173 35.9333 171.4 32.2667 171.4 27.6C171.4 21.6 173.4 16.6 177.4 12.6C181.4 8.46666 186.333 5.93333 192.2 5C191.667 4.46666 190.933 4.06666 190 3.8C189.2 3.53333 188.267 3.39999 187.2 3.39999ZM24.4 162.2C28.1333 162.2 31.4 161.133 34.2 159C37 157 39.4667 154.333 41.6 151C45.4667 144.867 49.3333 135.267 53.2 122.2C57.2 109.133 61.2 93.3333 65.2 74.8C69.3333 56.2667 73.4667 35.9333 77.6 13.8L81 18C78.8667 28.9333 76.6 40.0667 74.2 51.4C71.9333 62.6 69.6 73.6 67.2 84.4C64.8 95.0667 62.3333 105 59.8 114.2C57.2667 123.4 54.7333 131.4 52.2 138.2C49.6667 144.867 47.2 149.8 44.8 153C42.4 156.2 39.5333 159.067 36.2 161.6C33 164.267 28.7333 165.6 23.4 165.6C16.3333 165.6 10.6667 163.533 6.4 159.4C2.13333 155.267 -1.78814e-07 150.2 -1.78814e-07 144.2C-1.78814e-07 137.8 2.2 132.733 6.6 129C11 125.133 16.2667 123.2 22.4 123.2C27.8667 123.2 32.2 124.533 35.4 127.2C38.6 129.733 40.2 133.333 40.2 138C40.2 144 38.2 149 34.2 153C30.2 157 25.2667 159.533 19.4 160.6C19.9333 161.133 20.6 161.533 21.4 161.8C22.3333 162.067 23.3333 162.2 24.4 162.2ZM169.144 140.4C169.144 134.133 171.277 129.067 175.544 125.2C179.81 121.2 185.144 119.2 191.544 119.2C196.61 119.2 200.477 120.333 203.144 122.6C205.944 124.867 207.344 128.267 207.344 132.8C207.344 136.4 206.344 139.8 204.344 143C202.344 146.067 199.61 148.6 196.144 150.6C192.81 152.6 189.01 153.6 184.744 153.6C179.677 153.6 175.81 152.467 173.144 150.2C170.477 147.933 169.144 144.667 169.144 140.4Z" fill="currentColor" />
              </svg>
            </div>
 
            <div>
              <h1 className="font-semibold text-lg">Nuvio Desk</h1>
              <p className="text-sm text-muted">Support Center</p>
            </div>
          </div>
 
          <nav className="space-y-2">
            <SidebarItem icon={<Home size={18} />} label="Dashboard" />
            <SidebarItem
              icon={<FileText size={18} />}
              label="Chamados"
            />
 
            <SidebarItem
              active
              icon={<Plus size={18} />}
              label="Novo chamado"
            />

            <SidebarItem
              icon={<Settings size={18} />}
              label="Base de conhecimento"
            />
 
            <SidebarItem
              icon={<Users size={18} />}
              label="Usuários"
            />

            <SidebarItem
              icon={<Settings size={18} />}
              label="Relatórios"
            />
 
            <SidebarItem
              icon={<Settings size={18} />}
              label="Configurações"
            />
          </nav>
        </div>
 
        <div className="glass rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/736x/2e/c1/9b/2ec19b9e7b809e1c9a0707094b4429d3.jpg"
              alt="Avatar"
              className="h-11 w-11 rounded-full"
            />
 
            <div>
              <h3 className="font-medium">Joilson</h3>
              <p className="text-sm text-muted">Atendente</p>
            </div>
          </div>
 
          <ChevronDown size={18} />
        </div>
      </aside>
 
  
      <main className="flex-1 p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Novo chamado
            </h1>
 
            <p className="text-muted mt-1">
              Preencha os dados para abrir um novo
              ticket.
            </p>
          </div>
 
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={22} />
 
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
 
            <button className="btn-secondary px-5 py-3">
              Cancelar
            </button>
 
            <button className="btn-primary px-5 py-3 flex items-center gap-2">
              <Plus size={18} />
              Criar chamado
            </button>
          </div>
        </div>
 
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          <section className="bg-card border border-[var(--border)] rounded-3xl p-6 card-shadow">
            <h2 className="text-xl font-semibold mb-6">
              Informações do chamado
            </h2>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Solicitante" />
              <Input label="E-mail" />
 
              <Input
                label="Título do chamado"
                className="md:col-span-2"
              />
 
              <Select label="Categoria" options={["Software", "Hardware", "Infraestrutura", "Acessos", "Outros"]} />
 
              <Select label="Prioridade" options={["Baixa", "Média", "Alta", "Crítica"]} />
 
              <Select label="Responsável" options={["Suporte Nível 1", "Suporte Nível 2", "Segurança", "Desenvolvimento"]} />
 
              <Select label="Localização" options={["Matriz", "Filial Sul", "Filial Norte", "Remoto"]} />
            </div>
 
            
            <div className="mt-6">
              <label className="text-sm font-medium mb-2 block">
                Descrição
              </label>
 
              <textarea
                placeholder="Descreva o problema detalhadamente..."
                className="w-full min-h-[180px] p-4 resize-none"
              />
            </div>
 
          
            <div className="mt-6">
              <label className="text-sm font-medium mb-2 block">
                Anexos
              </label>
 
              <div className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center text-white mb-4">
                  <Upload size={24} />
                </div>
 
                <h3 className="font-medium">
                  Arraste arquivos aqui
                </h3>
 
                <p className="text-sm text-muted mt-1">
                  PNG, JPG, PDF, DOCX até 10MB
                </p>
 
                <button className="btn-primary mt-5 px-5 py-3">
                  Selecionar arquivos
                </button>
              </div>
            </div>
          </section>
 
          
          <aside className="space-y-6">
            <div className="bg-card border border-[var(--border)] rounded-3xl p-6">
              <h2 className="font-semibold mb-5">
                Resumo
              </h2>
 
              <div className="space-y-4 text-sm">
                <SummaryItem
                  label="Prioridade"
                  value="Alta"
                  danger
                />
 
                <SummaryItem
                  label="Categoria"
                  value="Software"
                />
 
                <SummaryItem
                  label="Responsável"
                  value="Não atribuído"
                />
 
                <SummaryItem
                  label="Previsão"
                  value="-"
                />
              </div>
            </div>
 
            <div className="bg-card border border-[var(--border)] rounded-3xl p-6">
              <h2 className="font-semibold mb-5">
                Dicas
              </h2>
 
              <ul className="space-y-4 text-sm text-muted">
                <li>
                  • Seja claro e objetivo no título
                </li>
 
                <li>
                  • Explique os passos do problema
                </li>
 
                <li>
                  • Adicione prints quando possível
                </li>
 
                <li>
                  • Informe o impacto do problema
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
 
function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
<button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
        active
          ? "gradient-primary text-white"
          : "hover:bg-[var(--muted)]"
      }`}
>
      {icon}
<span>{label}</span>
</button>
  );
}
 
function Input({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
<div className={className}>
<label className="text-sm font-medium mb-2 block">
        {label}
</label>
 
      <input
        placeholder={`Digite ${label.toLowerCase()}`}
        className="w-full px-4 py-3"
      />
</div>
  );
}
 
function Select({
  label,
  options = [],
}: {
  label: string;
  options?: string[];
}) {
  return (
<div>
<label className="text-sm font-medium mb-2 block">
        {label}
</label>
 
      <select className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20">
        <option value="">Selecionar {label}</option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>{option}</option>
        ))}
</select>
</div>
  );
}
 
function SummaryItem({
  label,
  value,
  danger,
}: {
  label: string;
  value: string;
  danger?: boolean;
}) {
  return (
<div className="flex items-center justify-between">
<span className="text-muted">{label}</span>
 
      <span
        className={
          danger
            ? "text-red-500 font-medium"
            : "font-medium"
        }
>
        {value}
</span>
</div>
  );
}