import Image from "next/image";

export function Profile() {
    return (
        
            <div className="bg-white/50 p-2 rounded-full">
            <Image src="/perfil.jpeg" alt="User" width={40} height={40} />
          </div>
        
    );
}