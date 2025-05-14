import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { 
  UserPlus, 
  CheckCircle, 
  DollarSign, 
  ArrowLeft 
} from "lucide-react";

export default function SimulateReferral() {
  const [step, setStep] = useState(1);
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!studentName || !email || !course) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos.",
          variant: "destructive"
        });
        return;
      }
      
      // Avançar para o próximo passo
      setStep(2);
      
      // Simular registro da indicação
      toast({
        title: "Indicação registrada!",
        description: "A inscrição foi iniciada através do seu link de afiliado.",
      });
    } else if (step === 2) {
      // Simular confirmação da matrícula
      setStep(3);
      
      toast({
        title: "Matrícula confirmada!",
        description: "A indicação foi validada com sucesso.",
      });
    } else if (step === 3) {
      // Simular pagamento da comissão
      toast({
        title: "Comissão creditada!",
        description: "Sua comissão foi adicionada ao seu saldo.",
      });
      
      // Redirecionar para o dashboard após 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={goBack}
            className="mr-4 text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">
            Simulação de Indicação
          </h1>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                <UserPlus className="h-4 w-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Inscrição</div>
            </div>
            <div className={`h-0.5 w-10 ${step >= 2 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                <CheckCircle className="h-4 w-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Confirmação</div>
            </div>
            <div className={`h-0.5 w-10 ${step >= 3 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                <DollarSign className="h-4 w-4" />
              </div>
              <div className="ml-2 text-sm font-medium">Recompensa</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do aluno</Label>
                <Input
                  id="name"
                  placeholder="Digite o nome completo"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Curso de interesse</Label>
                <Input
                  id="course"
                  placeholder="Digite o nome do curso"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Iniciar inscrição
              </Button>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Inscrição iniciada!</h3>
                <p className="text-sm text-blue-700">
                  A inscrição de <strong>{studentName}</strong> para o curso <strong>{course}</strong> foi iniciada através do seu link de afiliado.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Nesta etapa, o aluno confirma sua matrícula realizando o pagamento do curso.
                </p>
              </div>
              <Button type="submit" className="w-full mt-4">
                Simular confirmação de matrícula
              </Button>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Matrícula confirmada!</h3>
                <p className="text-sm text-green-700">
                  A matrícula de <strong>{studentName}</strong> no curso <strong>{course}</strong> foi confirmada com sucesso.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Agora você receberá a comissão pela indicação. O valor será adicionado ao seu saldo.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mt-2">
                  <p className="text-sm text-gray-600">Valor da comissão:</p>
                  <p className="text-lg font-bold text-green-600">R$ 120,00</p>
                </div>
              </div>
              <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700">
                Receber comissão
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
