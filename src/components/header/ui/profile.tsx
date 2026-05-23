import Image from "next/image";

export function Profile() {
    return (
        
            <div className="bg-white/50 rounded-full  cursor-pointer hover:bg-white/70 transition-colors">
                <div className="
                w-2.5 h-2.5 
                bg-(--online) 
                rounded-full border-(--sidebar) 
                absolute top-14.5 right-10
                outline-2 outline-(--sidebar)

                "></div>
            <Image
            className="
            rounded-full
            outline-2 outline-offset-2 outline-(--online)
            active:outline-3
            transition-all
            duration-300
            ease-in-out
            "            
             src="/balls.jpeg" alt="Foto de Perfil" width={40} height={40} />
          </div>
        
    );
}