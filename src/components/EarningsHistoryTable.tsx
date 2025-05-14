import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  FileDown, 
  Calendar, 
  Filter 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Tipos para os dados do histórico
interface EarningRecord {
  id: string;
  date: string;
  studentName: string;
  status: "confirmed" | "pending" | "rejected";
  amount: number;
  notes?: string;
}

// Dados de exemplo para o histórico de ganhos
const dummyEarnings: EarningRecord[] = [
  {
    id: "1",
    date: "2025-05-10",
    studentName: "Ana Silva",
    status: "confirmed",
    amount: 120.00,
    notes: "Curso de Programação Web"
  },
  {
    id: "2",
    date: "2025-05-08",
    studentName: "Carlos Oliveira",
    status: "pending",
    amount: 150.00,
    notes: "Curso de Marketing Digital - Aguardando confirmação de pagamento"
  },
  {
    id: "3",
    date: "2025-05-05",
    studentName: "Mariana Costa",
    status: "rejected",
    amount: 0.00,
    notes: "Aluno já cadastrado por outro afiliado"
  },
  {
    id: "4",
    date: "2025-04-28",
    studentName: "Pedro Santos",
    status: "confirmed",
    amount: 200.00,
    notes: "Curso de Design Gráfico"
  },
  {
    id: "5",
    date: "2025-04-25",
    studentName: "Juliana Mendes",
    status: "confirmed",
    amount: 180.00,
    notes: "Curso de Idiomas"
  },
  {
    id: "6",
    date: "2025-04-20",
    studentName: "Roberto Alves",
    status: "pending",
    amount: 120.00,
    notes: "Curso de Finanças Pessoais - Em análise"
  },
  {
    id: "7",
    date: "2025-04-15",
    studentName: "Fernanda Lima",
    status: "confirmed",
    amount: 150.00,
    notes: "Curso de Fotografia"
  },
  {
    id: "8",
    date: "2025-04-10",
    studentName: "Lucas Martins",
    status: "rejected",
    amount: 0.00,
    notes: "Desistência do aluno"
  }
];

// Função para formatar a data
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

// Função para formatar o valor monetário
const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

// Componente para o status com ícone
const StatusBadge = ({ status }: { status: EarningRecord['status'] }) => {
  switch (status) {
    case 'confirmed':
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          Confirmado
        </Badge>
      );
    case 'pending':
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Em análise
        </Badge>
      );
    case 'rejected':
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
          <XCircle className="h-3 w-3" />
          Recusado
        </Badge>
      );
    default:
      return null;
  }
};

// Componente para o card mobile
const MobileEarningCard = ({ earning }: { earning: EarningRecord }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-medium text-gray-900">{earning.studentName}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formatDate(earning.date)}
        </p>
      </div>
      <StatusBadge status={earning.status} />
    </div>
    <div className="flex justify-between items-center border-t border-gray-100 pt-3">
      <div className="text-sm">
        <p className="text-gray-500">Comissão:</p>
        <p className={cn(
          "font-medium",
          earning.status === "confirmed" ? "text-green-600" : 
          earning.status === "pending" ? "text-yellow-600" : "text-gray-400"
        )}>
          {formatCurrency(earning.amount)}
        </p>
      </div>
      {earning.notes && (
        <div className="text-sm text-gray-500 max-w-[60%] text-right">
          {earning.notes}
        </div>
      )}
    </div>
  </div>
);

interface EarningsHistoryTableProps {
  earnings?: EarningRecord[];
}

export default function EarningsHistoryTable({ 
  earnings = dummyEarnings 
}: EarningsHistoryTableProps) {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [filteredEarnings, setFilteredEarnings] = useState<EarningRecord[]>(earnings);

  // Função para filtrar por mês
  const filterByMonth = (month: string) => {
    setSelectedMonth(month);
    
    if (!month) {
      setFilteredEarnings(earnings);
      return;
    }
    
    const filtered = earnings.filter(earning => {
      const earningDate = new Date(earning.date);
      const earningMonth = earningDate.toISOString().substring(0, 7); // YYYY-MM
      return earningMonth === month;
    });
    
    setFilteredEarnings(filtered);
  };

  // Função para exportar o histórico (simulação)
  const exportHistory = () => {
    alert("Exportando histórico... Esta funcionalidade será implementada em breve.");
  };

  // Obter lista de meses únicos para o filtro
  const getUniqueMonths = () => {
    const months = earnings.map(earning => {
      const date = new Date(earning.date);
      return date.toISOString().substring(0, 7); // YYYY-MM
    });
    
    return Array.from(new Set(months)).sort().reverse();
  };

  const uniqueMonths = getUniqueMonths();

  // Função para formatar o nome do mês
  const formatMonthName = (monthString: string) => {
    const [year, month] = monthString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    
    return date.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedMonth}
            onChange={(e) => filterByMonth(e.target.value)}
          >
            <option value="">Todos os meses</option>
            {uniqueMonths.map(month => (
              <option key={month} value={month}>
                {formatMonthName(month)}
              </option>
            ))}
          </select>
        </div>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={exportHistory}
        >
          <FileDown className="h-4 w-4" />
          Exportar histórico
        </Button>
      </div>

      {/* Tabela para desktop */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[120px]">Data</TableHead>
              <TableHead>Nome do aluno</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead className="text-right w-[140px]">Comissão</TableHead>
              <TableHead>Observações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEarnings.length > 0 ? (
              filteredEarnings.map((earning) => (
                <TableRow key={earning.id}>
                  <TableCell className="font-medium">{formatDate(earning.date)}</TableCell>
                  <TableCell>{earning.studentName}</TableCell>
                  <TableCell>
                    <StatusBadge status={earning.status} />
                  </TableCell>
                  <TableCell className={cn(
                    "text-right font-medium",
                    earning.status === "confirmed" ? "text-green-600" : 
                    earning.status === "pending" ? "text-yellow-600" : "text-gray-400"
                  )}>
                    {formatCurrency(earning.amount)}
                  </TableCell>
                  <TableCell className="text-gray-500 text-sm">{earning.notes}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  Nenhum registro encontrado para o período selecionado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Cards para mobile */}
      <div className="md:hidden">
        {filteredEarnings.length > 0 ? (
          filteredEarnings.map((earning) => (
            <MobileEarningCard key={earning.id} earning={earning} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            Nenhum registro encontrado para o período selecionado.
          </div>
        )}
      </div>
    </div>
  );
}
