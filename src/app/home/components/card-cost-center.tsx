import { Button } from "@/app/_components/ui/button";
import { VisibilityValue } from "@/app/_components/visibility-value";
import { cn } from "@/app/_libs/utils";

interface Props {
  title: string;
  limit: number;
  value: number;
  total: number;
}
export function CardCostCenter({ title, limit, value, total }: Props) {
  const valor_limite_gasto = (limit * total) / 100;
  const valor_gasto = value;
  const limite_excedido = valor_gasto > valor_limite_gasto;
  const porcentagem = (valor_gasto / valor_limite_gasto) * 100;

  return (
    <Button className="flex flex-col items-center justify-between gap-4 p-4 bg-slate-900 w-full h-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <IconCostCenter title={title} /> */}
          <span className="text-sm text-white">{title}</span>
        </div>
        <span
          className={`text-xs
          ${limite_excedido ? "text-red-500" : "text-white"}`}
        >
          {isNaN(porcentagem) ? 0 : porcentagem.toFixed(0)}%
        </span>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="bg-slate-950 h-2 rounded-xl relative w-full">
          <div
            className={`h-2 rounded-xl relative
              ${limite_excedido ? "bg-red-500" : "bg-green-500"}`}
            style={{
              width: `${
                limite_excedido
                  ? 100
                  : isNaN(porcentagem)
                  ? 0
                  : porcentagem.toFixed(0)
              }%`,
            }}
          >
            {porcentagem > 18 && (
              <span
                className={cn(
                  "absolute right-0 bottom-[-6px] text-[10px] rounded-lg bg-slate-800 border",
                  limite_excedido ? "border-red-500" : "border-green-500"
                )}
              >
                <VisibilityValue value={valor_gasto} />
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center w-full text-xs">
          <span
            className={`flex justify-between items-center w-full text-xs
            ${limite_excedido ? "text-red-500" : "text-white"}`}
          >
            <VisibilityValue value={valor_gasto} />
          </span>
          <span className="text-white">
            <VisibilityValue value={valor_limite_gasto} />
          </span>
        </div>
      </div>
    </Button>
  );
}
