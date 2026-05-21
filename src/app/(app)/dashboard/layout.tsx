import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";

// import { Header } from "@/components/headerHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    // A classe 'flex' aqui é o que coloca a Sidebar ao lado do resto
    <div className="flex min-h-screen"> 
      {/* Este container agrupa o Header e o Conteúdo da página */}
      <div className="flex-1 flex flex-col">
        <Header/>
        <Sidebar/>
        <main>
          {children}
        </main>
      </div>

    </div>
  );
}