
import { Bell } from "lucide-react";

const Header = () => (
  <header className="fixed z-30 top-0 left-0 w-full bg-white shadow-sm flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
    <div className="flex items-center gap-3">
      {/* Logo da IE (placeholder) */}
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xl text-gray-500 select-none">
        IE
      </div>
      {/* Frase motivacional */}
      <span className="font-medium text-gray-700 text-sm md:text-base">Seja protagonista da sua rede de conhecimento!</span>
    </div>
    {/* Ícone de notificações */}
    <button
      aria-label="Notificações"
      className="rounded-full p-2 hover:bg-gray-100 relative group transition"
    >
      <Bell className="w-6 h-6 text-gray-500" />
      <span className="absolute right-1 top-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white animate-pulse" />
    </button>
  </header>
);

export default Header;
