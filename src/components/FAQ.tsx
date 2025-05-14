import { useState } from "react";
import {
  Link2,
  DollarSign,
  UserPlus,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Tipos para as perguntas do FAQ
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Indicação" | "Comissão" | "Cadastro";
  isPopular?: boolean;
}

// Dados das perguntas do FAQ
const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o processo de indicação de alunos?",
    answer: "O processo é simples: compartilhe seu link de afiliado com potenciais alunos. Quando alguém se inscrever através do seu link, a indicação será automaticamente registrada em seu nome. Após a confirmação da matrícula, você receberá a comissão correspondente.",
    category: "Indicação",
    isPopular: true
  },
  {
    id: "faq-2",
    question: "Quanto tempo leva para uma indicação ser confirmada?",
    answer: "Normalmente, as indicações são confirmadas em até 48 horas após a matrícula do aluno. Em períodos de alta demanda, como início de semestres, pode levar até 72 horas.",
    category: "Indicação"
  },
  {
    id: "faq-3",
    question: "Como recebo minhas comissões?",
    answer: "As comissões são pagas mensalmente, até o dia 15 do mês seguinte, via transferência bancária ou PIX para a conta cadastrada em seu perfil. É necessário ter um saldo mínimo de R$ 50,00 para receber o pagamento.",
    category: "Comissão"
  },
  {
    id: "faq-4",
    question: "Qual o percentual de comissão que recebo por indicação?",
    answer: "O percentual de comissão varia de 10% a 30%, dependendo do curso e do seu nível de afiliado. Quanto mais alunos você indicar, maior será seu nível e, consequentemente, sua comissão.",
    category: "Comissão"
  },
  {
    id: "faq-5",
    question: "Como faço para me cadastrar como afiliado?",
    answer: "Para se cadastrar como afiliado, acesse a página de cadastro em nosso site, preencha o formulário com seus dados pessoais e informações bancárias. Após a análise, que leva até 3 dias úteis, você receberá um e-mail de confirmação com seu link de afiliado.",
    category: "Cadastro"
  },
  {
    id: "faq-6",
    question: "Posso atualizar meus dados bancários?",
    answer: "Sim, você pode atualizar seus dados bancários a qualquer momento através da seção 'Minha Conta' no painel do afiliado. As alterações serão aplicadas no próximo ciclo de pagamento.",
    category: "Cadastro"
  }
];

// Componente para cada item do FAQ
const FAQItem = ({
  item,
  isOpen,
  toggleItem
}: {
  item: FAQItem;
  isOpen: boolean;
  toggleItem: () => void;
}) => {
  // Função para obter o ícone baseado na categoria
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Indicação":
        return <Link2 className="h-6 w-6 text-[#1E3A8A]" />;
      case "Comissão":
        return <DollarSign className="h-6 w-6 text-[#10B981]" />;
      case "Cadastro":
        return <UserPlus className="h-6 w-6 text-[#A78BFA]" />;
      default:
        return <HelpCircle className="h-6 w-6 text-gray-500" />;
    }
  };

  // Função para obter a cor de fundo baseada na categoria
  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case "Indicação":
        return "bg-blue-50";
      case "Comissão":
        return "bg-green-50";
      case "Cadastro":
        return "bg-purple-50";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div className={cn(
      "border border-gray-100 rounded-xl overflow-hidden mb-5 shadow-sm transition-all duration-200 hover:shadow-md",
      item.isPopular ? "border-l-4 border-l-[#1E3A8A]" : ""
    )}>
      <button
        onClick={toggleItem}
        className={cn(
          "w-full flex items-center justify-between p-5 text-left transition-all",
          isOpen
            ? `${getCategoryBgColor(item.category)} border-b border-gray-100`
            : `hover:${getCategoryBgColor(item.category)}`
        )}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            getCategoryBgColor(item.category),
            item.isPopular ? "ring-2 ring-[#1E3A8A]/20" : ""
          )}>
            {getCategoryIcon(item.category)}
          </div>
          <div>
            <div className={cn(
              "font-medium flex items-center gap-2 text-gray-900",
              item.isPopular ? "text-[#1E3A8A]" : ""
            )}>
              {item.question}
              {item.isPopular && (
                <Badge className="ml-2 bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1 flex items-center">
              <span className={cn(
                "inline-block w-2 h-2 rounded-full mr-1.5",
                item.category === "Indicação" ? "bg-[#1E3A8A]" :
                item.category === "Comissão" ? "bg-[#10B981]" : "bg-[#A78BFA]"
              )}></span>
              {item.category}
            </div>
          </div>
        </div>
        <div className={cn(
          "flex-shrink-0 transition-transform duration-200",
          isOpen ? "rotate-180" : ""
        )}>
          <ChevronDown className={cn(
            "h-5 w-5",
            item.category === "Indicação" ? "text-[#1E3A8A]" :
            item.category === "Comissão" ? "text-[#10B981]" : "text-[#A78BFA]"
          )} />
        </div>
      </button>
      {isOpen && (
        <div className="p-5 bg-white">
          <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente principal do FAQ
export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Função para alternar a abertura/fechamento de um item
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Agrupar itens por categoria
  const groupedItems = faqItems.reduce<Record<string, FAQItem[]>>(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  // Ordenar categorias
  const orderedCategories = ["Indicação", "Comissão", "Cadastro"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Ilustração e cabeçalho */}
      <div className="relative mb-12 text-center">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#A78BFA]/10 rounded-full blur-xl"></div>
        <div className="absolute -top-5 right-1/4 w-16 h-16 bg-[#10B981]/10 rounded-full blur-lg"></div>
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-[#1E3A8A]/10 rounded-full blur-xl"></div>

        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="bg-[#F3F4F6] p-4 rounded-full">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Lightbulb className="h-10 w-10 text-[#1E3A8A]" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-3 font-poppins">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o programa de afiliados da Saber em Rede.
          </p>
        </div>

        {/* Ilustração de pessoas */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white z-30">
                <GraduationCap className="h-5 w-5 text-[#1E3A8A]" />
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white z-20">
                <Users className="h-5 w-5 text-[#A78BFA]" />
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-white z-10">
                <BookOpen className="h-5 w-5 text-[#10B981]" />
              </div>
            </div>
            <div className="bg-[#F3F4F6] px-3 py-1 rounded-full text-sm text-gray-700">
              +5.000 afiliados já encontraram respostas aqui
            </div>
          </div>
        </div>
      </div>

      {/* Categorias e perguntas */}
      {orderedCategories.map((category) => (
        groupedItems[category] && (
          <div key={category} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                category === "Indicação" ? "bg-blue-50" :
                category === "Comissão" ? "bg-green-50" : "bg-purple-50"
              )}>
                {category === "Indicação" ?
                  <Link2 className="h-6 w-6 text-[#1E3A8A]" /> :
                category === "Comissão" ?
                  <DollarSign className="h-6 w-6 text-[#10B981]" /> :
                  <UserPlus className="h-6 w-6 text-[#A78BFA]" />
                }
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-poppins">{category}</h3>
            </div>

            <div>
              {groupedItems[category].map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={!!openItems[item.id]}
                  toggleItem={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        )
      ))}

      {/* CTA de suporte */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-[#1E3A8A]/5 via-[#A78BFA]/5 to-[#10B981]/5 rounded-xl p-6 shadow-sm">
          <div className="mb-4">
            <div className="bg-white w-14 h-14 rounded-full shadow-sm flex items-center justify-center mx-auto">
              <MessageSquare className="h-7 w-7 text-[#1E3A8A]" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">Ainda com dúvidas?</h4>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Nossa equipe de suporte está pronta para ajudar você com qualquer questão sobre o programa de afiliados.
          </p>
          <Button
            className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white flex items-center gap-2 mx-auto shadow-sm"
            size="lg"
          >
            <MessageSquare className="h-5 w-5" />
            Fale com o suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
