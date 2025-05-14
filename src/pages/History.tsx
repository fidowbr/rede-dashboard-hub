import Header from "../components/Header";
import EarningsHistoryTable from "../components/EarningsHistoryTable";
import FloatingHelpButton from "../components/FloatingHelpButton";
import { DollarSign } from "lucide-react";

export default function History() {
  return (
    <div className="relative min-h-screen w-full">
      <Header fraseMotivacional="Transforme indicações em recompensas hoje!" />
      <main className="w-full flex flex-col items-center pt-[72px] pb-12 px-3 max-w-5xl mx-auto md:pt-[86px] md:px-6">
        <div className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50">
              <DollarSign className="text-green-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Histórico de Ganhos</h1>
              <p className="text-gray-600 text-sm">
                Acompanhe suas comissões e o status de suas indicações
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <EarningsHistoryTable />
          </div>
        </div>
      </main>
      <FloatingHelpButton />
    </div>
  );
}
