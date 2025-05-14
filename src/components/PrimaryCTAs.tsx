
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

    // Adicionar um toast com link para simulação
    setTimeout(() => {
      toast({
        title: "Testar o fluxo de indicação",
        description: (
          <div className="cursor-pointer text-blue-600 hover:underline" onClick={() => navigate("/simulate-referral")}>
            Clique aqui para simular uma indicação
          </div>
        ),
        duration: 5000,
      });
    }, 1000);
  }

  function handleHistoricalClick(e: React.MouseEvent) {
    e.preventDefault();
    // Redirecionando para a página de histórico de ganhos
    navigate("/history");
  }

  function handleOffersClick(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/offers");
  }

  function handleMaterialsClick(e: React.MouseEvent) {
    e.preventDefault();
    // Redirecionando para a página de ajuda por enquanto
    navigate("/help");
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
        onClick={handleMaterialsClick}
      >
        Acesse materiais de divulgação
      </Button>
      <div className="w-full md:w-auto flex items-center justify-center gap-4">
        <button
          className="block mt-2 text-gray-500 hover:underline text-sm"
          type="button"
          onClick={handleHistoricalClick}
        >
          Veja seu histórico de ganhos
        </button>
        <button
          className="block mt-2 text-blue-600 hover:underline text-sm font-medium"
          type="button"
          onClick={handleOffersClick}
        >
          Ver ofertas disponíveis
        </button>
      </div>
    </section>
  );
}
