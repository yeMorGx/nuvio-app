import { Header } from "@/components/header/Header"
import { Sidebar } from "@/components/sidebar/Sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="ml-64">
        <Header />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}