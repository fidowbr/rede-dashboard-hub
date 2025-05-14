import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Users, BookOpen } from "lucide-react";

export default function HeroBanner() {
  const navigate = useNavigate();
  
  const handleCTAClick = () => {
    // Scroll to the primary CTAs section
    const ctaSection = document.querySelector('#primary-ctas');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="w-full bg-gradient-to-r from-primary/95 via-primary to-accent/90 text-white rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="relative w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0tMjAgMGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTIwLTIwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTIwIDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-center px-6 py-10 md:py-12 md:px-10 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 z-10 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Indique e transforme vidas. <span className="text-accent-foreground">A cada nova matrícula, você cresce junto.</span>
            </h1>
            <p className="text-white/90 mb-6 text-lg max-w-xl">
              Compartilhe conhecimento, multiplique oportunidades e aumente sua renda como afiliado da Saber em Rede.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium text-base px-6 py-3 shadow-md"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Comece a indicar agora
            </Button>
          </div>
          
          {/* Right Illustration */}
          <div className="flex-1 flex justify-center md:justify-end z-10">
            <div className="relative w-full max-w-md">
              {/* Main Illustration */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Comunidade</div>
                    <div className="text-xl font-semibold">+5.000 afiliados</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Cursos</div>
                    <div className="text-xl font-semibold">+200 opções</div>
                  </div>
                </div>
                
                {/* Success Stories */}
                <div className="mt-6 bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-medium">Maria S.</div>
                      <div className="text-xs text-white/80">Afiliada Nível 3</div>
                    </div>
                  </div>
                  <p className="text-sm italic">
                    "Já indiquei mais de 30 alunos e transformei minha paixão por educação em renda extra!"
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
