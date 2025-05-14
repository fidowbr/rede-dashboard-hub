
const steps = [
  { label: "1. Compartilhe seu link", detail: "Envie o link exclusivo" },
  { label: "2. Indicado realiza cadastro", detail: "Acompanhe o progresso" },
  { label: "3. Ganhe recompensas", detail: "Veja suas comissões" },
];

export default function IndicacaoFluxoPlaceholder() {
  return (
    <section className="mt-7 w-full flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-700 text-lg mb-3">Como indicar?</h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center md:flex-col md:items-start">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 font-bold text-gray-600 mr-3 md:mr-0 mb-0 md:mb-2">
              {idx + 1}
            </div>
            <div>
              <div className="font-medium text-sm text-gray-700">{step.label}</div>
              <div className="text-xs text-gray-400">{step.detail}</div>
            </div>
            {idx < steps.length - 1 ? (
              <div className="hidden md:block h-9 border-r border-gray-200 mx-4" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
