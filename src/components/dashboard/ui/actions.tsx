import { Plus } from "@/components/animate-ui/icons/plus";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Layers } from "@/components/animate-ui/icons/layers";

export default function Actions() {
    return (
        <div className="flex flex-col items-center justify-center bg-(--card) border border-(--card-border) rounded-lg mt-10 gap-4 p-7">

            <div className="text-2xl font-semibold text-(--foreground)">
                <h1 className="flex justify-start">Ações Rápidas</h1>
            </div>

            <AnimateIcon animateOnHover>
            <button className="cursor-pointer bg-(--primary) text-white px-30 py-4 rounded-[15px] hover:bg-(--primary-hover) transition-all flex items-center gap-2">
                <Plus />
                Novo Chamado
            </button>
            </AnimateIcon>

            <AnimateIcon animateOnHover>
            <button className="cursor-pointer bg-(--secondary-button-bg) text-(--secondary-button-foreground) px-24 py-4 rounded-[15px] hover:bg-(--secondary-button-hover-bg) transition-all flex items-center gap-2">
                <Layers />
                base de conhecimento
            </button>
            </AnimateIcon>
        </div>
    );
}