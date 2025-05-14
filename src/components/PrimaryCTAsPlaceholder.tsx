
export default function PrimaryCTAsPlaceholder() {
  return (
    <section className="mt-7 w-full flex flex-col gap-3 md:flex-row md:gap-5">
      <button className="w-full md:w-auto bg-gray-800 text-white font-semibold rounded-lg px-6 py-3 shadow hover:bg-gray-700 transition">
        Gerar link de indicação
      </button>
      <button className="w-full md:w-auto bg-gray-100 text-gray-700 font-semibold rounded-lg px-6 py-3 shadow hover:bg-gray-200 transition">
        Ver minha rede
      </button>
    </section>
  );
}
