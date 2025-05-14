
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Clipboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

// OBS: Esse link será dinâmico, vindo do usuário autenticado via backend/Supabase futuramente.
const AFFILIATE_LINK_PLACEHOLDER = "seu-link-de-afiliado-aqui";

export default function PrimaryCTAs() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  function handleCopy() {
    navigator.clipboard.writeText(AFFILIATE_LINK_PLACEHOLDER);
    setCopied(true);
    toast({
      title: "Link copiado!",
      description: "Seu link de afiliado foi copiado para a área de transferência.",
      duration: 2500,
    });
    setTimeout(() => setCopied(false), 2500);
  }

  function handleHistoricalClick(e: React.MouseEvent) {
    e.preventDefault();
    // Placeholder: Navegar para rota de histórico de ganhos (a página será criada futuramente)
    navigate("/historico");
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
        // Futuramente: abrirá seleção/materials de divulgação
      >
        Acesse materiais de divulgação
      </Button>
      <div className="w-full md:w-auto flex items-center justify-center">
        <button
          className="block mt-2 text-gray-500 hover:underline text-sm mx-auto"
          type="button"
          onClick={handleHistoricalClick}
        >
          Veja seu histórico de ganhos
        </button>
      </div>
    </section>
  );
}
