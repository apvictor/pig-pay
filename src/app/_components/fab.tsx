import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  GridFour,
  Plus,
} from "@phosphor-icons/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Fab() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-pig hover:bg-tertiary text-white transition-all duration-500 p-3 bottom-5 right-5 fixed rounded-full">
        <Plus size={20} weight="bold" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex items-center gap-2">
          <ArrowCircleUp size={20} className="text-teal-900" />
          Nova Receita
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <ArrowCircleDown size={20} className="text-red-900" />
          Nova Despesa
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <Bank size={20} className="text-blue-900" />
          Nova Conta
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <GridFour size={20} className="text-purple-900" />
          Novo Centro de Custo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
