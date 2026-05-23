import { Bell } from "@/components/animate-ui/icons/bell";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Settings } from "@/components/animate-ui/icons/settings";

export function Notifications() {
    return (
        
        <AnimateIcon animateOnHover>

        <div className="py-2 px-4 rounded-full bg-(--notification-bg) cursor-pointer outline-2 outline-offset-2 outline-(--notification-outline) hover:outline-3 transition-all duration-300 ease-in-out flex items-center gap-2 text-(--notification-text)">
            <Bell  className={"w-5 h-5"}/>
            Você tem 3 novas notificações!
        </div>

        </AnimateIcon>
    );
}