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
            <div className="h-10 w-10 rounded-2xl gradient-primary flex items-center justify-center text-white">
              <LifeBuoy size={20} />
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
 
              <Select label="Categoria" />
 
              <Select label="Prioridade" />
 
              <Select label="Responsável" />
 
              <Select label="Localização" />
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
}: {
  label: string;
}) {
  return (
<div>
<label className="text-sm font-medium mb-2 block">
        {label}
</label>
 
      <select className="w-full px-4 py-3">
<option>Selecionar</option>
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