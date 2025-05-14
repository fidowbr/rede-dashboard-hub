
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import IndicacaoFluxo from "../components/IndicacaoFluxo";
import PrimaryCTAs from "../components/PrimaryCTAs";
import AjudaLinksPlaceholder from "../components/AjudaLinksPlaceholder";
import FloatingHelpButton from "../components/FloatingHelpButton";

// Demais props (logo, frase, cores) poderiam ser buscadas de um contexto/config futura
const fraseMotivacional =
  "Você está a 1 aluno da próxima recompensa!"; // Deixe customizável por prop futuramente

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Header fraseMotivacional={fraseMotivacional} />
      <main className="w-full flex flex-col items-center pt-[72px] pb-12 px-3 max-w-3xl mx-auto md:pt-[86px] md:px-0">
        {/* Dashboard de Performance (Bloco 1) */}
        <DashboardCards />
        {/* Fluxo de Indicação Simplificado (Bloco 2) */}
        <IndicacaoFluxo />
        {/* CTAs Principais (Bloco 3) */}
        <PrimaryCTAs />
        {/* Ajuda/Informações (Bloco 4) */}
        <AjudaLinksPlaceholder />
      </main>
      <FloatingHelpButton />
    </div>
  );
};

export default Index;
