
import DashboardCard from "./DashboardCard";
import { Link, Users, GraduationCap, DollarSign } from "lucide-react";

/**
 * No futuro, os valores abaixo serão preenchidos via dados retornados do backend/Supabase
 * e deverão ser específicos do afiliado autenticado (conforme autenticação).
 */
const dashboardMetrics = [
  {
    title: "Indicações Feitas",
    value: 15, // Futuramente: vindo de dados do backend
    icon: <Link className="text-blue-500" />,
    progress: 75,
    levelLabel: "Nível 2",
    highlightColor: "bg-blue-50",
    incentiveText: "Falta pouco para o Nível 3!"
  },
  {
    title: "Alunos Matriculados",
    value: 5, // Futuramente: vindo de dados do backend
    icon: <GraduationCap className="text-purple-500" />,
    progress: 50,
    levelLabel: "Nível 1",
    highlightColor: "bg-purple-50",
    incentiveText: "Continue assim para mais recompensas!"
  },
  {
    title: "Saldo de Comissão",
    value: "R$ 250,00", // Futuramente: vindo de dados do backend
    icon: <DollarSign className="text-green-500" />,
    progress: 30,
    levelLabel: "Nível 1",
    highlightColor: "bg-green-50",
    incentiveText: "Sua próxima meta de ganhos está próxima!"
  },
];

// ESTA INTERFACE PERMITIRÁ DATAS DINÂMICOS NO FUTURO!
const DashboardCards = ({
  metrics = dashboardMetrics
} : { metrics?: typeof dashboardMetrics }) => (
  <section className="w-full grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
    {metrics.map((metric) => (
      <DashboardCard
        key={metric.title}
        {...metric}
      />
    ))}
  </section>
);

export default DashboardCards;
