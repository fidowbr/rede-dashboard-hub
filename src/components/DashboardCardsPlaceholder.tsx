
const metrics = [
  { title: "Indicados", value: "-", description: "Total de pessoas indicadas" },
  { title: "Conversões", value: "-", description: "Indicações convertidas" },
  { title: "Comissão", value: "-", description: "Comissão acumulada" },
];

export default function DashboardCardsPlaceholder() {
  return (
    <section className="w-full flex flex-col gap-4 mt-4 md:flex-row md:gap-6">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-lg shadow-sm flex-1 px-6 py-5 flex flex-col items-start min-w-[0] min-h-[100px] transition hover:shadow-md"
        >
          <div className="text-xs text-gray-400 uppercase mb-1 tracking-wide">{m.title}</div>
          <div className="font-bold text-2xl text-gray-700">{m.value}</div>
          <div className="text-xs text-gray-400 mt-1">{m.description}</div>
        </div>
      ))}
    </section>
  );
}
