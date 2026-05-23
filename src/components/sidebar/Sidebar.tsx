"use client";

import { AnimateIcon } from "@/components/animate-ui/icons/icon";

import { PanelLeftClose } from "@/components/animate-ui/icons/panel-left-close";
import { Layers } from "@/components/animate-ui/icons/layers";
import { ChartSpline } from "@/components/animate-ui/icons/chart-spline";
import { MessageSquareText } from "@/components/animate-ui/icons/message-square-text";
import { Plus } from "@/components/animate-ui/icons/plus";
import { UsersRound } from "@/components/animate-ui/icons/users-round";
import { LayoutDashboard } from "@/components/animate-ui/icons/layout-dashboard";
import { Settings } from "@/components/animate-ui/icons/settings";

import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="w-64 bg-(--sidebar) border-r border-(--sidebar-border) flex flex-col min-h-screen">
      {/* LOGO */}
      <div className="p-10 flex items-center gap-3 justify-center">
        <Image
          src="/N.svg"
          alt="Logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 space-y-2">

        <div className="flex flex-col gap-3">
        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <LayoutDashboard />
            Dashboard
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <MessageSquareText />
            Chamados
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <Plus />
            Novo Chamado
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <Layers />
            Base de Conhecimento
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <UsersRound />
            Usuários
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <ChartSpline />
            Relatórios
          </a>
        </AnimateIcon>

        <AnimateIcon animateOnHover>
          <a href="#" className="flex items-center gap-3 p-3 text-(--sidebar-foreground) hover:bg-(--hoverbg) hover:text-(--hovertxt) rounded-lg transition">
            <Settings />
            Configurações
          </a>
        </AnimateIcon>
        </div>
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t flex items-center justify-between border-white/10">
        <p className="text-xs text-zinc-500 italic">Em desenvolvimento</p>
        <AnimateIcon animateOnHover>
        <div className="p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-(--hoverbg) active:scale-95">
            <PanelLeftClose className={"w-5 h-5"} />
          </div>
        </AnimateIcon>
      </div>
    </aside>
  );
}