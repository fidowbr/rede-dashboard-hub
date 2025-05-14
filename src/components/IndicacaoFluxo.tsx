
import {
  Share2,
  User,
  Check,
  DollarSign,
} from "lucide-react";

const steps = [
  {
    label: "Compartilhe seu link",
    icon: <Share2 className="text-blue-500" />,
  },
  {
    label: "Aluno faz inscrição",
    icon: <User className="text-purple-500" />,
  },
  {
    label: "Indicação validada",
    icon: <Check className="text-green-500" />,
  },
  {
    label: "Receba sua recompensa",
    icon: <DollarSign className="text-yellow-500" />,
  },
];

export default function IndicacaoFluxo() {
  return (
    <section className="mt-7 w-full flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-700 text-lg mb-5">
        Como indicar um aluno?
      </h2>
      <ol className="relative flex flex-col gap-0.5 md:flex-row md:gap-0 md:justify-between md:items-center">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="flex items-center relative md:flex-col md:items-center md:flex-1"
          >
            <div className="z-10 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-lg shadow-sm mb-0 md:mb-2 shrink-0">
              {step.icon}
            </div>
            <span className="ml-3 md:ml-0 md:mt-1 text-sm text-gray-700 text-center max-w-[110px]">
              {step.label}
            </span>

            {idx < steps.length - 1 && (
              <>
                {/* Linha de ligação entre passos */}
                <div
                  className="hidden md:block absolute top-1/2 right-0 h-1 w-full border-t border-gray-200 z-0"
                  style={{
                    left: "56px",
                    width: "calc(100% - 56px)"
                  }}
                />
                <div
                  className="block md:hidden w-1 h-7 mx-4 bg-gray-200 rounded"
                />
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
