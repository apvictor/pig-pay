import { VisibilityValue } from "@/app/_components/visibility-value";
import { cn } from "@/app/_libs/utils";

interface Props {
  name: string;
  value: number;
  transactionType: string;
  account: { name: string };
  costCenter: { name: string };
  openModalEditTransaction: () => void;
}
export function CardTransaction() {
  const transactionType = "INCOME";
  return (
    <button className="flex items-center gap-3 bg-slate-900 w-full h-full p-3 rounded-md">
      {/* <IconCostCenter title={transactionType} /> */}

      <div className="flex flex-col flex-1 items-start bottom-0 border-l-2 border-slate-900 pl-3">
        <span className="text-sm">Salario</span>
        <span className="text-gray-500 text-xs">
          {/* {transactionType == "INCOME" ? "Entrada" : `${costCenter.name}`} */}
          Entrada
        </span>
      </div>

      <div className="flex flex-col items-end">
        <span
          className={cn(
            "text-sm",
            transactionType === "INCOME" ? "text-green-500" : "text-red-500"
          )}
        >
          <VisibilityValue value={100} />
        </span>
        <span className="text-gray-500 text-xs">
          {/* {account.name} */}
          Nubank
        </span>
      </div>
    </button>
  );
}
