import { Button } from "@/app/_components/ui/button";
import { CaretLeft, Funnel } from "@phosphor-icons/react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center gap-8">
      <Link href="/home" className="bg-transparent">
        <Button className="bg-transparent">
          <CaretLeft size={24} />
        </Button>
      </Link>

      <span className="text-xl">Transações</span>

      <Button className="bg-transparent">
        <Funnel size={24} />
      </Button>
    </header>
  );
}
