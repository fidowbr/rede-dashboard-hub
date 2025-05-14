
import MainNav from "./MainNav";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  logoSrc?: string;
  fraseMotivacional?: string;
}

const Header = ({
  logoSrc,
  fraseMotivacional = "Transforme indicações em recompensas hoje!",
}: HeaderProps) => (
  <header className="fixed z-30 top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
    <div className="flex items-center min-w-0 gap-2">
      <Link to="/" className="flex items-center">
        <img
          src="/images/ddf5b320c1506339295ca175deb3cff0.png"
          alt="Saber em Rede"
          className="h-10 md:h-12"
        />
      </Link>
    </div>

    {/* Navegação principal */}
    <MainNav />

    {/* Versão mobile: frase motivacional abaixo do logo */}
    <span className="block md:hidden absolute left-1/2 top-[62px] -translate-x-1/2 text-xs text-primary font-medium bg-white/95 px-3 py-1 rounded-full shadow-sm z-10 border border-gray-100">
      {fraseMotivacional}
    </span>

    <div className="flex items-center gap-1">
      <button
        aria-label="Notificações"
        className="rounded-full p-2 hover:bg-gray-100 relative group transition"
        tabIndex={0}
      >
        <Bell className="w-6 h-6 text-primary/80" />
        <span className="absolute right-1 top-1 w-2 h-2 bg-secondary rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  </header>
);

export default Header;
