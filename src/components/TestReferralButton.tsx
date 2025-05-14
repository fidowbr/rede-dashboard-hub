import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function TestReferralButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/simulate-referral");
  };

  return (
    <div className="w-full mt-8 mb-4 flex flex-col items-center">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 max-w-xl w-full">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 rounded-full p-2 mt-1">
            <PlayCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-1">Modo de Demonstração</h3>
            <p className="text-sm text-blue-700 mb-3">
              Teste o fluxo completo de indicação de alunos, desde o compartilhamento do link até o recebimento da comissão.
            </p>
            <Button 
              onClick={handleClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="sm"
            >
              Iniciar simulação de indicação
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
