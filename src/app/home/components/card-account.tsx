import Image from "next/image";

import { getBank } from "@/app/_libs/bank";
import { Button } from "@/app/_components/ui/button";
import { VisibilityValue } from "@/app/_components/visibility-value";

interface Props {
  name: string;
  incomeTotal: number;
  expenseTotal: number;
}
export function CardAccount({ name, expenseTotal, incomeTotal }: Props) {
  return (
    <Button className="flex items-center justify-between w-full px-4 py-6  bg-slate-900">
      <div className="flex items-center gap-2">
        <Image
          alt={name}
          src={getBank(name)}
          className="rounded-full"
          width={24}
          height={24}
        />
        <span className="text-xs">{name}</span>
      </div>
      <span className="font-bold text-sm">
        <VisibilityValue value={incomeTotal - expenseTotal} />
      </span>
    </Button>
  );
}
