
import { HelpCircle } from "lucide-react";

export default function FloatingHelpButton() {
  return (
    <button
      aria-label="Ajuda"
      className="fixed z-40 bottom-4 right-4 md:bottom-8 md:right-8 bg-gray-900 text-white rounded-full p-3 shadow-lg hover:bg-gray-800 active:scale-95 transition flex items-center justify-center"
      style={{ boxShadow: "0 4px 16px 0 #0002" }}
      // Ação futura: abrir modal de chat ou menu de ajuda
    >
      <HelpCircle className="w-6 h-6" />
    </button>
  );
}
