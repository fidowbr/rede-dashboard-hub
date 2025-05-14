import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

// Tipo para as ofertas
interface Offer {
  id: string;
  name: string;
  payout: number;
  terms: string;
  status: "active" | "inactive";
}

// Tipo para a direção de ordenação
type SortDirection = "asc" | "desc" | null;

// Tipo para a coluna de ordenação
type SortColumn = "name" | "payout" | "terms" | null;

// Dados de exemplo para as ofertas
const dummyOffers: Offer[] = [
  {
    id: "1",
    name: "Curso de Programação",
    payout: 150.00,
    terms: "30 dias",
    status: "active",
  },
  {
    id: "2",
    name: "Curso de Marketing Digital",
    payout: 120.50,
    terms: "15 dias",
    status: "active",
  },
  {
    id: "3",
    name: "Curso de Design Gráfico",
    payout: 200.00,
    terms: "45 dias",
    status: "inactive",
  },
  {
    id: "4",
    name: "Curso de Idiomas",
    payout: 180.00,
    terms: "60 dias",
    status: "active",
  },
  {
    id: "5",
    name: "Curso de Finanças",
    payout: 250.00,
    terms: "30 dias",
    status: "inactive",
  },
];

interface OfferTableProps {
  offers?: Offer[];
  caption?: string;
}

export default function OfferTable({ 
  offers = dummyOffers, 
  caption = "Lista de ofertas disponíveis para afiliação" 
}: OfferTableProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [sortedOffers, setSortedOffers] = useState<Offer[]>(offers);

  // Função para alternar a ordenação
  const toggleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      // Se já estiver ordenando por esta coluna, alterne a direção
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      // Se for uma nova coluna, comece com ascendente
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Efeito para ordenar as ofertas quando a coluna ou direção mudar
  useEffect(() => {
    if (!sortColumn || !sortDirection) {
      setSortedOffers([...offers]);
      return;
    }

    const sorted = [...offers].sort((a, b) => {
      if (sortColumn === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortColumn === "payout") {
        return sortDirection === "asc"
          ? a.payout - b.payout
          : b.payout - a.payout;
      } else if (sortColumn === "terms") {
        return sortDirection === "asc"
          ? a.terms.localeCompare(b.terms)
          : b.terms.localeCompare(a.terms);
      }
      return 0;
    });

    setSortedOffers(sorted);
  }, [offers, sortColumn, sortDirection]);

  // Renderiza o ícone de ordenação apropriado
  const renderSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    
    if (sortDirection === "asc") {
      return <ArrowUp className="ml-2 h-4 w-4" />;
    }
    
    if (sortDirection === "desc") {
      return <ArrowDown className="ml-2 h-4 w-4" />;
    }
    
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  return (
    <Table className="border-collapse">
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-gray-50">
          <TableHead 
            className="w-[300px] cursor-pointer"
            onClick={() => toggleSort("name")}
          >
            <div className="flex items-center">
              Offer Name
              {renderSortIcon("name")}
            </div>
          </TableHead>
          <TableHead 
            className="text-right cursor-pointer"
            onClick={() => toggleSort("payout")}
          >
            <div className="flex items-center justify-end">
              Payout
              {renderSortIcon("payout")}
            </div>
          </TableHead>
          <TableHead 
            className="cursor-pointer"
            onClick={() => toggleSort("terms")}
          >
            <div className="flex items-center">
              Terms
              {renderSortIcon("terms")}
            </div>
          </TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedOffers.map((offer) => (
          <TableRow 
            key={offer.id} 
            className={`hover:bg-gray-50 ${offer.status === "inactive" ? "opacity-60" : ""}`}
          >
            <TableCell className="font-medium">{offer.name}</TableCell>
            <TableCell className="text-right">R$ {offer.payout.toFixed(2)}</TableCell>
            <TableCell>{offer.terms}</TableCell>
            <TableCell className="text-right">
              <Button 
                variant="outline" 
                size="sm"
                disabled={offer.status === "inactive"}
              >
                Promover
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
