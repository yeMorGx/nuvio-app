import InputUser from "@/components/admin/inputUser";
import InputPassword from "@/components/admin/inputPassword";
import AdminButton from "@/components/admin/button";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] p-6">

      {/* CARD PRINCIPAL */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        {/* 📸 LADO ESQUERDO (IMAGEM) */}
        <div className="w-1/2 relative hidden md:block">
          <div className="absolute inset-0 bg-[url('/2199615.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 p-8 text-white flex flex-col justify-end h-full">
            <h2 className="text-xl font-semibold">
              <span className={playfairDisplay.className}>Nuvio</span> - Acesso Administrativo
            </h2>
          </div>
        </div>

        {/* 🧾 LADO DIREITO (FORMULÁRIO) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <div className="mb-6">
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <p className="text-gray-500 text-sm">
              Faça login para continuar
            </p>
          </div>

          <form className="space-y-4">
            <InputUser />
            <InputPassword />

            <AdminButton />

            <p className="text-xs text-gray-500 text-center">
              Esta é uma área restrita. Se você não tem acesso, por favor, entre em contato com o administrador do sistema.
            </p>
          </form>

        </div>

      </div>
    </div>
  );
}