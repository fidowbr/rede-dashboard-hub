import Header from "../components/Header";
import OfferTable from "../components/OfferTable";
import FloatingHelpButton from "../components/FloatingHelpButton";

export default function Offers() {
  return (
    <div className="relative min-h-screen w-full">
      <Header fraseMotivacional="Transforme indicações em recompensas hoje!" />
      <main className="w-full flex flex-col items-center pt-[72px] pb-12 px-3 max-w-5xl mx-auto md:pt-[86px] md:px-6">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Ofertas Disponíveis</h1>
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <OfferTable />
          </div>
        </div>
      </main>
      <FloatingHelpButton />
    </div>
  );
}
