
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Clipboard } from "lucide-react";

const INDICACAO_LINK = "https://saberemrede.com.br/seulink";

export default function PrimaryCTAs() {
  const linkInput = useRef<HTMLInputElement>(null);

  function handleCopy() {
    navigator.clipboard.writeText(INDICACAO_LINK);
    toast({
      title: "Link copiado!",
      description: "Seu link de indicação foi copiado para a área de transferência.",
      duration: 2400,
    });
  }

  return (
    <section className="mt-7 w-full flex flex-col gap-3 md:flex-row md:gap-5">
      <Button
        className="w-full md:w-auto text-base font-semibold px-6 py-3 shadow bg-primary text-primary-foreground"
        onClick={handleCopy}
      >
        <Clipboard className="mr-2" size={20} />
        Compartilhe seu link agora!
      </Button>
      <Button
        variant="secondary"
        className="w-full md:w-auto text-base font-semibold px-6 py-3 shadow"
      >
        Acesse materiais de divulgação
      </Button>
      <div className="w-full md:w-auto">
        <button
          className="block mt-2 text-gray-500 hover:underline text-sm mx-auto"
          type="button"
        >
          Veja seu histórico de ganhos
        </button>
      </div>
    </section>
  );
}
