import { VisibilityValue } from "@/app/_components/visibility-value";
import { cn } from "@/app/_libs/utils";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
  className: string;
}
export function CardBalance({ title, value, className, icon }: Props) {
  return (
    <div className="bg-slate-900 flex-1 flex items-center gap-3 p-3 rounded-md">
      <div className={cn("p-1.5 rounded-full", className)}>{icon}</div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-light">{title}</span>
        <span className="text-xs font-bold">
          <VisibilityValue value={value} />
        </span>
      </div>
    </div>
  );
}
