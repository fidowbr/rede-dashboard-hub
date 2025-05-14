
export default function AjudaLinksPlaceholder() {
  return (
    <section className="mt-7 w-full flex flex-col gap-3 items-start bg-white border border-gray-100 rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-700 text-lg mb-1">Precisa de ajuda?</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">FAQ - Dúvidas Frequentes</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Regulamento</a>
        </li>
      </ul>
    </section>
  );
}
