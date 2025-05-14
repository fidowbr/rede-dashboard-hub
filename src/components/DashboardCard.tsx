
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
  incentiveText?: string; // Texto de incentivo para o afiliado
}

const DashboardCard = ({
  title,
  value,
  icon,
  progress,
  levelLabel = "Nível 1",
  highlightColor = "bg-purple-100",
  incentiveText
}: DashboardCardProps) => (
  <div
    className={`flex flex-col justify-between bg-white border border-gray-100 rounded-xl shadow-sm px-5 py-5 h-full transition hover:shadow-md`}
  >
    <div className="flex items-start gap-3">
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${highlightColor} shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">{title}</div>
        <div className="flex items-center flex-wrap gap-2 mt-1">
          <div className="font-bold text-2xl text-gray-700">{value}</div>
          <Badge variant="secondary" className="text-xs py-0 px-2">{levelLabel}</Badge>
        </div>
      </div>
    </div>
    <div className="mt-5">
      <Progress value={progress} className="h-2 rounded-full" />
      {/* Legenda de progresso abaixo */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-[10px] text-gray-400">Progresso para o próximo nível</div>
        {incentiveText && (
          <div className="text-[11px] font-medium text-blue-600">{incentiveText}</div>
        )}
      </div>
    </div>
  </div>
);

export default DashboardCard;
