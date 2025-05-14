import Header from "../components/Header";
import FAQ from "../components/FAQ";
import FloatingHelpButton from "../components/FloatingHelpButton";

export default function Help() {
  return (
    <div className="relative min-h-screen w-full">
      <Header fraseMotivacional="Transforme indicações em recompensas hoje!" />
      <main className="w-full flex flex-col items-center pt-[72px] pb-12 px-3 max-w-5xl mx-auto md:pt-[86px] md:px-6">
        <div className="w-full bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8">
          <FAQ />
        </div>
      </main>
      <FloatingHelpButton />
    </div>
  );
}
