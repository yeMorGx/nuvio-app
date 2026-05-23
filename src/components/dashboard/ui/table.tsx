type Prioridade = "Alta" | "Média" | "Baixa";
type Status = "Aberto" | "Em atendimento" | "Aguardando";

type Ticket = {
  id: string;
  titulo: string;
  solicitante: string;
  avatar: string;
  prioridade: Prioridade;
  status: Status;
  atualizado: string;
};

import Image from "next/image";

const tickets: Ticket[] = [
  {
    id: "#2458",
    titulo: "Erro no login",
    solicitante: "Gabriel",
    avatar: "https://i.pravatar.cc/40?img=1",
    prioridade: "Alta",
    status: "Em atendimento",
    atualizado: "10 min",
  },

  {
    id: "#2459",
    titulo: "VPN offline",
    solicitante: "Lucas",
    avatar: "https://i.pravatar.cc/40?img=2",
    prioridade: "Média",
    status: "Aberto",
    atualizado: "25 min",
  },

  {
    id: "#2460",
    titulo: "Falha no Outlook",
    solicitante: "Ana",
    avatar: "https://i.pravatar.cc/40?img=1",
    prioridade: "Baixa",
    status: "Aguardando",
    atualizado: "1 h",
  },
];

const prioridadeColors = {
  Alta: "bg-red-100 text-red-700",
  Média: "bg-yellow-100 text-yellow-700",
  Baixa: "bg-green-100 text-green-700",
};

const statusColors = {
  Aberto: "bg-blue-100 text-blue-700",
  "Em atendimento": "bg-green-100 text-green-700",
  Aguardando: "bg-zinc-200 text-zinc-700",
};

export default function Table() {
  return (
    <div
      className="
        bg-(--card)
        border border-(--card-border)
        rounded-(--radius)
        p-6
        mt-10

    "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-(--foreground) font-semibold">
          Chamados recentes
        </h2>

        <button className="text-(--primary) mr-4 hover:underline">Ver todos</button>
        
      </div>
      <table className="w-full">
        <thead className="text-zinc-500 border- border-(--card-border)">
          <tr>
            <th className="text-left pb-4 font-medium">ID</th>

            <th className="text-left pb-4 font-medium">Título</th>

            <th className="text-left pb-4 font-medium">Solicitante</th>

            <th className="text-left pb-4 font-medium">Prioridade</th>

            <th className="text-left pb-4 font-medium">Status</th>

            <th className="text-left pb-4 font-medium">Atualizado</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={index}
              className=" cursor-pointer
              hover:bg-black/1
              border-b border-(--card-border)
              transition-colors"
            >
              {/* ID */}
              <td className="py-4 text-(--foreground)">{ticket.id}</td>
              {/* Título */}
              <td className="py-4 text-(--foreground)">{ticket.titulo}</td>
              {/* Solicitante */}
              <td className="flex gap-2 items-center py-4 text-(--foreground) hover:text-(--primary) transition-all hover:underline cursor-pointer">
                <img src={ticket.avatar} alt={ticket.solicitante} className=" w-5 h-5 rounded-full object-cover"/>
                {ticket.solicitante}
              </td>

              {/* Prioridade */}
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${prioridadeColors[ticket.prioridade]}`}
                >
                  {ticket.prioridade}
                </span>
              </td>

              {/* Status */}
              <td className="py-4">
                <span
                  className={`
        px-3 py-1 rounded-full text-sm
        ${statusColors[ticket.status]}
      `}
                >
                  {ticket.status}
                </span>
              </td>

              <td className="py-4 text-zinc-500">{ticket.atualizado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
