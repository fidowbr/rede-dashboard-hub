import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Definição dos links de navegação
interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

// Links de navegação principal
const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    description: "Visualize seu desempenho e indicações",
  },
  {
    title: "Ofertas",
    href: "/offers",
    description: "Explore as ofertas disponíveis para afiliação",
  },
  {
    title: "Histórico",
    href: "/history",
    description: "Acompanhe seu histórico de ganhos",
  },
];

// Links da seção Resources/Support
const resourcesItems: NavSection = {
  title: "Recursos/Suporte",
  items: [
    {
      title: "Central de Ajuda",
      href: "/help",
      description: "Encontre respostas para suas dúvidas",
    },
    {
      title: "Materiais de Divulgação",
      href: "/materials",
      description: "Acesse materiais para promover os cursos",
    },
    {
      title: "Tutoriais",
      href: "/tutorials",
      description: "Aprenda a maximizar seus ganhos",
    },
    {
      title: "Contato",
      href: "/contact",
      description: "Entre em contato com nossa equipe",
    },
  ],
};

export default function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const location = useLocation();

  // Verifica se o link está ativo
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex">
      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-6 mx-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative group",
              isActive(item.href)
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.title}
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
              isActive(item.href) ? "w-full" : "w-0"
            )}></span>
          </Link>
        ))}

        {/* Dropdown de Recursos/Suporte */}
        <div className="relative">
          <button
            onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary relative group",
              showResourcesDropdown ? "text-primary" : "text-muted-foreground"
            )}
          >
            {resourcesItems.title}
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform duration-200",
              showResourcesDropdown ? "rotate-180" : ""
            )} />
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
              showResourcesDropdown ? "w-full" : "w-0"
            )}></span>
          </button>

          {showResourcesDropdown && (
            <div className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-white shadow-lg border border-gray-100 focus:outline-none z-50 overflow-hidden">
              <div className="py-1">
                {resourcesItems.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowResourcesDropdown(false)}
                  >
                    <div className="font-medium text-primary">{item.title}</div>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Botão do Menu Mobile */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Menu Mobile */}
      {showMobileMenu && (
        <div className="fixed inset-0 top-[62px] z-50 grid h-[calc(100vh-64px)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden bg-white">
          <div className="relative z-20 grid gap-6 p-4 rounded-lg border border-gray-100 shadow-sm">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-3 text-sm font-medium hover:bg-gray-50 transition-colors",
                    isActive(item.href)
                      ? "bg-blue-50 text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Seção de Recursos no Mobile */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <h4 className="font-medium text-primary mb-3 px-2 font-poppins">{resourcesItems.title}</h4>
                {resourcesItems.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex w-full items-center rounded-md p-3 text-sm font-medium hover:bg-gray-50 transition-colors text-muted-foreground"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
