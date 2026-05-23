import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-[var(--background)]">
      
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50">
        <Sidebar />
      </aside>

      {/* HEADER */}
      <header className="fixed top-0 left-64 right-0 h-16 z-50">
        <Header />
      </header>

      {/* CONTEÚDO COM OFFSET CERTO */}
      <main className="ml-64 h-full pt-16 overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>

    </div>
  );
}