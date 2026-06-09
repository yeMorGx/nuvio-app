"use client";

import { useState, useEffect, useId } from "react";
import { useTheme } from "next-themes";
import { SearchBar } from "@/components/header/ui/searchBar";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- COMPONENTES AUXILIARES ---

// ATUALIZAÇÃO: O componente Switch foi refatorado para melhor acessibilidade.
// - A `div` foi trocada por um `<button>`, que é um elemento interativo por natureza.
// - Adicionados os atributos `role="switch"` e `aria-checked` para que leitores de tela o identifiquem corretamente.
// - Adicionados estilos de foco (`focus:ring-2`, etc.) para melhor navegação por teclado.
// - A lógica de inversão do estado foi movida para dentro do componente, simplificando seu uso.
const Switch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    // ATUALIZAÇÃO: Corrigido o evento de clique. Agora ele chama a função `onChange`
    // passando o novo valor booleano, em vez de passar o evento do mouse.
    onClick={() => onChange(!checked)}
    // ATUALIZAÇÃO: Corrigida a sintaxe do Tailwind para usar variáveis CSS (ex: `bg-[var(--primary)]`)
    // e adicionados estilos de foco para acessibilidade.
    className={`w-10 h-[22px] rounded-full relative cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring)] ${
      checked ? "bg-[var(--primary)]" : "bg-[var(--muted-foreground)] opacity-60"
    }`}
  >
    <span
      aria-hidden="true"
      className={`absolute w-4 h-4 bg-white rounded-full top-[3px] transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)] ${
        checked ? "left-[21px]" : "left-[3px]"
      }`}
    />
  </button>
);

// ATUALIZAÇÃO: O componente FormRow foi melhorado para acessibilidade.
// - Adicionada a propriedade `htmlFor`, que é usada para associar a `<label>` ao seu respectivo campo de formulário (`<input>`, `<select>`, etc.).
// - Isso é crucial para que usuários de leitores de tela possam navegar e entender os formulários corretamente.
const FormRow = ({
  label,
  description,
  children,
  noBorder = false,
  htmlFor, // <-- ATUALIZAÇÃO: Nova propriedade para acessibilidade
}: {
  label: string;
  description: string;
  children: React.ReactNode;
  noBorder?: boolean;
  htmlFor: string; // <-- ATUALIZAÇÃO: Propriedade agora é obrigatória
}) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-5 py-4 items-center ${
      // ATUALIZAÇÃO: Corrigida a sintaxe do Tailwind para usar variáveis CSS.
      noBorder ? "" : "border-b border-[var(--muted)]"
    }`}
  >
    <div>
      {/* ATUALIZAÇÃO: O `htmlFor` agora conecta a label ao input correspondente. */}
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-[var(--card-foreground)] mb-1">
        {label}
      </label>
      {/* ATUALIZAÇÃO: Corrigida a sintaxe do Tailwind para usar variáveis CSS. */}
      <span className="text-xs text-[var(--muted-foreground)] leading-relaxed block">
        {description}
      </span>
    </div>
    <div className="w-full">{children}</div>
  </div>
);

// ATUALIZAÇÃO: Corrigida a sintaxe do Tailwind para usar variáveis CSS.
// A sintaxe incorreta `border-(--border)` foi substituída pela correta `border-[var(--border)]`.
// Isso se aplica a todas as classes que usam variáveis CSS no projeto.
const inputClasses =
  "w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm outline-none focus:border-[var(--ring)] transition-colors";

const TABS = [
  { id: "geral", icon: "", label: "Geral" },
  { id: "perfil", icon: "", label: "Perfil" },
  { id: "notificacoes", icon: "", label: "Notificações" },
  { id: "tickets", icon: "", label: "Tickets" },
  { id: "seguranca", icon: "", label: "Segurança" },
];

// --- COMPONENTES DAS ABAS ---
// ATUALIZAÇÃO: O conteúdo de cada aba foi extraído para seu próprio componente.
// Isso torna o componente principal `SettingsPage` muito mais limpo e fácil de gerenciar.
// Cada componente de aba agora gerencia seu próprio estado interno (ex: `isEditingPassword` em `ProfileSettings`).

const GeneralSettings = () => (
  <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)] mb-6">
    <h2 className="text-base font-semibold mb-1">Geral</h2>
    <p className="text-[var(--muted-foreground)] text-[13px] mb-6">
      Configurações básicas do sistema.
    </p>

    <FormRow htmlFor="company-name" label="Nome da empresa" description="Este nome será exibido para os usuários do sistema.">
      <input id="company-name" type="text" defaultValue="Help Desk" className={inputClasses} />
    </FormRow>

    <FormRow htmlFor="timezone" label="Fuso horário" description="Selecione o fuso horário padrão do sistema.">
      <select id="timezone" className={inputClasses}>
        <option>(GMT-03:00) Brasilia</option>
      </select>
    </FormRow>

    <FormRow htmlFor="language" label="Idioma" description="Selecione o idioma do sistema.">
      <select id="language" className={inputClasses}>
        <option>Português (Brasil)</option>
      </select>
    </FormRow>

    <FormRow htmlFor="date-format" label="Formato de data" description="Escolha o formato de data que será exibido no sistema.">
      <select id="date-format" className={inputClasses}>
        <option>DD/MM/YYYY</option>
      </select>
    </FormRow>

    <FormRow htmlFor="time-format" label="Formato de hora" description="Escolha o formato de hora que será exibido no sistema.">
      <select id="time-format" className={inputClasses}>
        <option>24 horas</option>
        <option>12 horas (AM/PM)</option>
      </select>
    </FormRow>

    <FormRow htmlFor="currency" label="Moeda" description="Selecione a moeda padrão para relatórios e exportações." noBorder>
      <select id="currency" className={inputClasses}>
        <option>BRL (R$)</option>
      </select>
    </FormRow>

    <div className="flex justify-end mt-6 pt-6 border-t border-[var(--muted)]">
      <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-colors hover:bg-[var(--primary-hover)]">
        💾 Salvar alterações
      </button>
    </div>
  </div>
);

const ProfileSettings = () => {
  // ATUALIZAÇÃO: O estado `isEditingPassword` foi movido para este componente,
  // onde ele é exclusivamente utilizado. Isso é chamado de "co-localização de estado" e é uma boa prática.
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const passwordId = useId();

  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)] mb-6">
      <h2 className="text-base font-semibold mb-1">Perfil</h2>
      <p className="text-[var(--muted-foreground)] text-[13px] mb-6">
        Gerencie suas informações pessoais e credenciais.
      </p>

      <FormRow htmlFor="full-name" label="Nome Completo" description="Como você será identificado na plataforma.">
        <input id="full-name" type="text" defaultValue="Lucas Oliveira" className={inputClasses} />
      </FormRow>

      <FormRow htmlFor="email" label="E-mail Profissional" description="E-mail utilizado para login e alertas.">
        <input id="email" type="email" defaultValue="lucas@exemplo.com" className={inputClasses} />
      </FormRow>

      <FormRow htmlFor={isEditingPassword ? passwordId : ""} label={isEditingPassword ? "Nova Senha" : "Senha de Acesso"} description={isEditingPassword ? "Digite uma senha forte com no mínimo 8 caracteres." : "Gerencie a senha usada para acessar o sistema."} noBorder>
        {isEditingPassword ? (
          <input id={passwordId} autoFocus type="password" placeholder="Digite sua nova senha" className={inputClasses} />
        ) : (
          <div className="flex items-center justify-between bg-[var(--muted)] px-3 py-2 rounded-lg border border-[var(--border)]">
            <span className="font-mono tracking-widest">••••••••</span>
            <button
              onClick={() => setIsEditingPassword(true)}
              className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-3 py-1.5 rounded-md font-semibold cursor-pointer text-xs transition-colors hover:bg-[var(--muted)]"
            >
              Editar
            </button>
          </div>
        )}
      </FormRow>

      <div className="flex justify-end mt-6 pt-6 border-t border-[var(--muted)]">
        <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-colors hover:bg-[var(--primary-hover)]">
          {isEditingPassword ? "💾 Atualizar dados" : "💾 Atualizar perfil"}
        </button>
      </div>
    </div>
  );
};

const SecuritySettings = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)] mb-6">
      <h2 className="text-base font-semibold mb-1">Segurança</h2>
      <p className="text-[var(--muted-foreground)] text-[13px] mb-6">Proteja sua conta e gerencie onde você está conectado.</p>

      <h3 className="text-sm font-semibold text-[var(--card-foreground)] border-b border-[var(--muted)] pb-2 mb-4">Autenticação</h3>
      <div className="flex justify-between items-center py-2 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-0.5">Autenticação de Dois Fatores (2FA)</label>
          <span className="text-xs text-[var(--muted-foreground)]">Exige um código extra gerado no seu celular ao fazer login.</span>
        </div>
        <Switch checked={twoFactor} onChange={setTwoFactor} />
      </div>

      <h3 className="text-sm font-semibold text-[var(--card-foreground)] border-b border-[var(--muted)] pb-2 mt-8 mb-4">Check-up de Segurança</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <label className="block text-sm font-semibold mb-0.5">Sessões Ativas</label>
          <span className="text-xs text-[var(--muted-foreground)]">Verifique os dispositivos que têm acesso à sua conta.</span>
        </div>
        <button className="bg-transparent border border-[var(--border)] text-[var(--foreground)] px-4 py-2 rounded-md font-semibold cursor-pointer text-[13px] transition-colors hover:bg-[var(--muted)]">
          Revisar Dispositivos
        </button>
      </div>
    </div>
  );
};

const TicketsSettings = () => (
  <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)] mb-6">
    <h2 className="text-base font-semibold mb-1">Tickets</h2>
    <p className="text-[var(--muted-foreground)] text-[13px] mb-6">Configure as regras de triagem e encerramento automático.</p>
    
    <FormRow htmlFor="auto-close" label="Encerramento Automático" description="Dias após a resolução para fechar o ticket." noBorder>
      <select id="auto-close" className={inputClasses}>
        <option>3 dias</option>
        <option>5 dias</option>
      </select>
    </FormRow>
    
    <div className="flex justify-end mt-6 pt-6 border-t border-[var(--muted)]">
      <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-colors hover:bg-[var(--primary-hover)]">
        💾 Salvar regras
      </button>
    </div>
  </div>
);

const NotificationsSettings = () => (
  <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)] mb-6">
    <h2 className="text-base font-semibold mb-1">Notificações</h2>
    <p className="text-[var(--muted-foreground)] text-[13px] mb-6">
      Configure como você recebe as notificações do sistema. (Página em construção)
    </p>
    <div className="flex justify-center items-center h-40 border-2 border-dashed border-[var(--muted)] rounded-lg">
      <p className="text-[var(--muted-foreground)]">Em breve...</p>
    </div>
  </div>
);

// ATUALIZAÇÃO: Este objeto mapeia o ID de cada aba ao seu respectivo componente.
// Facilita a renderização dinâmica do conteúdo da aba selecionada no componente principal.
const tabContent: Record<string, React.ReactNode> = {
  geral: <GeneralSettings />,
  perfil: <ProfileSettings />,
  notificacoes: <NotificationsSettings />,
  seguranca: <SecuritySettings />,
  tickets: <TicketsSettings />,
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("geral");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ATUALIZAÇÃO: Os estados que eram específicos de cada aba (como `isEditingPassword`)
  // foram movidos para seus respectivos componentes (`ProfileSettings`, etc.).
  // Apenas os estados que são globais para a página ou para os widgets da sidebar permanecem aqui.
  const [compactMode, setCompactMode] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [animations, setAnimations] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-10 bg-[var(--background)] text-[var(--foreground)] overflow-y-auto">
      
      {/* --- CABEÇALHO --- */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Configurações</h1>
          <p className="text-[var(--muted-foreground)] text-sm">
            Gerencie as configurações do sistema e personalize sua experiência.
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-1 md:w-72">
            <SearchBar />
          </div>
          <button className="w-10 h-10 shrink-0 rounded-full border border-[var(--border)] flex items-center justify-center bg-[var(--card)] relative hover:bg-[var(--hoverbg)] transition-colors cursor-pointer">
            <Bell className="w-5 h-5 text-[var(--foreground)]" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--ring)] rounded-full"></div>
          </button>
        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL (3 COLUNAS) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[220px_1fr_340px] gap-8 items-start">
        
        {/* NAVEGAÇÃO LATERAL ESQUERDA */}
        <nav className="flex flex-col gap-1" aria-label="Navegação das configurações">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors text-left w-full cursor-pointer ${
                activeTab === tab.id
                  ? "text-[var(--primary)] font-semibold"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] font-medium"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-[var(--hoverbg)] rounded-lg"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <span>{tab.icon}</span> {tab.label}
              </div>
            </button>
          ))}
        </nav>

        {/* ÁREA CENTRAL DE CONTEÚDO */}
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* ATUALIZAÇÃO: O conteúdo da aba agora é renderizado dinamicamente
                  usando o objeto `tabContent`. Isso substitui a longa cadeia de `if/else` (&&)
                  que existia antes, tornando o código muito mais limpo e escalável. */}
              {tabContent[activeTab] || <div>Em breve...</div>}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* SIDEBAR DIREITA (WIDGETS) */}
        <aside className="flex flex-col gap-6 lg:col-span-2 xl:col-span-1">
          {/* TEMA */}
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)]">
            <h2 className="text-base font-semibold mb-1">Aparência</h2>
            <p className="text-[var(--muted-foreground)] text-[13px] mb-4">Escolha o tema de aparência do sistema.</p>
            
            {mounted && (
              <div className="grid grid-cols-2 gap-4">
                <div onClick={() => setTheme("light")} className={`border rounded-lg p-3 cursor-pointer flex flex-col gap-3 transition-colors ${theme !== "dark" ? "border-[var(--ring)] bg-[var(--hoverbg)] border-2" : "border-[var(--border)]"}`}>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${theme !== "dark" ? "border-[var(--ring)]" : "border-[var(--border)]"}`}>{theme !== "dark" && <div className="w-2 h-2 bg-[var(--ring)] rounded-full" />}</div> Claro
                  </div>
                  <div className="h-[60px] bg-[#fdfdfd] border-t-8 border-[#e0e0e0] rounded border border-gray-200" />
                </div>
                <div onClick={() => setTheme("dark")} className={`border rounded-lg p-3 cursor-pointer flex flex-col gap-3 transition-colors ${theme === "dark" ? "border-[var(--ring)] bg-[var(--hoverbg)] border-2" : "border-[var(--border)]"}`}>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${theme === "dark" ? "border-[var(--ring)]" : "border-[var(--border)]"}`}>{theme === "dark" && <div className="w-2 h-2 bg-[var(--ring)] rounded-full" />}</div> Escuro
                  </div>
                  <div className="h-[60px] bg-[#1e1e1e] border-t-8 border-[#333] rounded border border-gray-800" />
                </div>
              </div>
            )}
          </div>

          {/* OUTRAS OPÇÕES */}
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[var(--radius)] p-6 shadow-[var(--shadow)]">
            <h2 className="text-base font-semibold mb-4">Outras opções</h2>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center"><div className="pr-4"><label className="block text-sm font-semibold mb-0.5">Modo compacto</label><span className="text-xs text-[var(--muted-foreground)]">Reduz o espaçamento entre elementos.</span></div><Switch checked={compactMode} onChange={setCompactMode} /></div>
              <div className="flex justify-between items-center"><div className="pr-4"><label className="block text-sm font-semibold mb-0.5">Exibir dicas</label><span className="text-xs text-[var(--muted-foreground)]">Mostrar dicas e tutoriais para novos usuários.</span></div><Switch checked={showTips} onChange={setShowTips} /></div>
              <div className="flex justify-between items-center"><div className="pr-4"><label className="block text-sm font-semibold mb-0.5">Animações</label><span className="text-xs text-[var(--muted-foreground)]">Habilita animações e transições suaves.</span></div><Switch checked={animations} onChange={setAnimations} /></div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}