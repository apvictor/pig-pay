import { Separator } from "@/app/_components/ui/separator";
import { CalendarDots, List } from "@phosphor-icons/react";

interface Props {
  openModalFilterMonth: () => void;
  openMenu: () => void;
}
export function Header({ openModalFilterMonth, openMenu }: Props) {
  return (
    <header className="flex justify-between items-center gap-8">
      <button className="text-white" onClick={openMenu}>
        <List size={24} />
      </button>

      <div className="w-full">
        <Separator className="bg-gray-600" orientation="horizontal" />
      </div>

      <button className="text-white flex gap-2" onClick={openModalFilterMonth}>
        {/* {monthName} */}
        <CalendarDots size={24} />
      </button>
    </header>
  );
}
