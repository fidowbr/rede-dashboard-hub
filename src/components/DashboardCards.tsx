
import DashboardCard from "./DashboardCard";
import { Link, Users, GraduationCap, DollarSign } from "lucide-react";

const dashboardMetrics = [
  {
    title: "Indicações Feitas",
    value: 15,
    icon: <Link className="text-blue-500" />,
    progress: 75,
    levelLabel: "Nível 2",
    highlightColor: "bg-blue-50"
  },
  {
    title: "Alunos Matriculados",
    value: 5,
    icon: <GraduationCap className="text-purple-500" />,
    progress: 50,
    levelLabel: "Nível 1",
    highlightColor: "bg-purple-50"
  },
  {
    title: "Saldo de Comissão",
    value: "R$ 250,00",
    icon: <DollarSign className="text-green-500" />,
    progress: 30,
    levelLabel: "Nível 1",
    highlightColor: "bg-green-50"
  },
];

const DashboardCards = () => (
  <section className="w-full flex flex-col gap-4 mt-4 md:flex-row md:gap-6">
    {dashboardMetrics.map((metric) => (
      <DashboardCard
        key={metric.title}
        {...metric}
      />
    ))}
  </section>
);

export default DashboardCards;
