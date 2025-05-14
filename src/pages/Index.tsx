
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import IndicacaoFluxo from "../components/IndicacaoFluxo";
import PrimaryCTAs from "../components/PrimaryCTAs";
import AjudaLinksPlaceholder from "../components/AjudaLinksPlaceholder";
import FloatingHelpButton from "../components/FloatingHelpButton";
import TestReferralButton from "../components/TestReferralButton";
import HeroBanner from "../components/HeroBanner";

/**
 * O usuário afiliado logado deverá ser identificado via autenticação (ex: Supabase Auth)
 * e suas informações (link, dados do dashboard, etc.) alimentadas dinamicamente.
 * Por ora, valores e frase motivacional são placeholders.
 */
const fraseMotivacional =
  "Você está a 1 aluno da próxima recompensa!"; // Dinamizar para associação à IE via backend futuramente

const Index = () => {
  // Futuro: hook para pegar dados do usuário autenticado (ex: via Supabase)
  // const { user } = useAuthSupabase();

  // Futuro: passar dados dinâmicos para DashboardCards e PrimaryCTAs via props/context
  return (
    <div className="relative min-h-screen w-full">
      <Header fraseMotivacional={fraseMotivacional} />
      <main className="w-full flex flex-col items-center pt-[72px] pb-12 px-3 max-w-5xl mx-auto md:pt-[86px] md:px-4">
        {/* Banner Hero */}
        <HeroBanner />

        {/* Botão de teste do fluxo de indicação */}
        <TestReferralButton />

        {/* Dashboard de Performance (Bloco 1) */}
        <DashboardCards />
        {/* Fluxo de Indicação Simplificado (Bloco 2) */}
        <IndicacaoFluxo />
        {/* CTAs Principais (Bloco 3) */}
        <div id="primary-ctas">
          <PrimaryCTAs />
        </div>
        {/* Ajuda/Informações (Bloco 4) */}
        <AjudaLinksPlaceholder />
      </main>
      <FloatingHelpButton />
    </div>
  );
};

export default Index;
