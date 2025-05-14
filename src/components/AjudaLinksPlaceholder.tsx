
import { BookOpen, FileText } from "lucide-react";

export default function AjudaLinksPlaceholder() {
  return (
    <section className="mt-7 w-full flex flex-col gap-4 items-start bg-white border border-gray-100 rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-700 text-lg mb-1">Precisa de ajuda?</h2>
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 hover:underline text-base font-medium transition"
        >
          <BookOpen className="w-5 h-5" />
          FAQ
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 hover:underline text-base font-medium transition"
        >
          <FileText className="w-5 h-5" />
          Regulamento do Programa
        </a>
      </div>
      <span className="text-xs text-gray-500 mt-2">
        Para mais informações, utilize o botão de ajuda no canto da tela.
      </span>
    </section>
  );
}
