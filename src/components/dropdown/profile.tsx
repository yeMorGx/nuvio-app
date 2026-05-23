"use client";

import { useState } from "react";

export default function Dropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="
                    bg-(--card)
                    border border-(--card-border)
                    px-4 py-2
                    rounded-lg
                "
            >
                Abrir menu
            </button>

            {open && (
                <div
                    className="
                        absolute
                        top-12
                        right-0
                        w-48
                        bg-(--card)
                        border border-(--card-border)
                        rounded-xl
                        p-2
                        shadow-lg
                    "
                >
                    <button className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg">
                        Perfil
                    </button>

                    <button className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg">
                        Configurações
                    </button>

                    <button className="w-full text-left px-3 py-2 hover:bg-red-500/10 text-red-500 rounded-lg">
                        Sair
                    </button>
                </div>
            )}
        </div>
    );
}