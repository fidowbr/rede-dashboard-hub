
import LogoIE from "./LogoIE";
import { Bell } from "lucide-react";

interface HeaderProps {
  logoSrc?: string;
  fraseMotivacional?: string;
}

const Header = ({
  logoSrc,
  fraseMotivacional = "Você está a 1 aluno da próxima recompensa!",
}: HeaderProps) => (
  <header className="fixed z-30 top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
    <div className="flex items-center min-w-0 gap-2">
      <LogoIE size={44} src={logoSrc} />
      <span className="hidden md:inline-block font-medium text-gray-700 text-base ml-3">
        {fraseMotivacional}
      </span>
    </div>
    {/* Versão mobile: frase centralizada abaixo do logo */}
    <span className="block md:hidden absolute left-1/2 top-[62px] -translate-x-1/2 text-xs text-gray-700 bg-white/80 px-3 py-1 rounded shadow-sm z-10">
      {fraseMotivacional}
    </span>
    <button
      aria-label="Notificações"
      className="rounded-full p-2 hover:bg-gray-100 relative group transition ml-auto"
      tabIndex={0}
    >
      <Bell className="w-6 h-6 text-gray-500" />
      <span className="absolute right-1 top-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white animate-pulse" />
    </button>
  </header>
);

export default Header;
