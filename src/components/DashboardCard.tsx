
import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  progress: number; // 0 to 100
  levelLabel?: string;
  highlightColor?: string;
}

const DashboardCard = ({
  title,
  value,
  icon,
  progress,
  levelLabel = "Nível 1",
  highlightColor = "bg-purple-100"
}: DashboardCardProps) => (
  <div
    className={`flex flex-col justify-between bg-white border border-gray-100 rounded-xl shadow-sm px-5 py-5 min-w-[0] flex-1 transition hover:shadow-md`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${highlightColor}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">{title}</div>
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-gray-700">{value}</div>
          <Badge variant="secondary" className="text-xs py-0 px-2 ml-1">{levelLabel}</Badge>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <Progress value={progress} className="h-2 rounded-full" />
      {/* Opcional: legenda de progresso abaixo */}
      <div className="text-[10px] text-gray-400 mt-1">Progresso para o próximo nível</div>
    </div>
  </div>
);

export default DashboardCard;
