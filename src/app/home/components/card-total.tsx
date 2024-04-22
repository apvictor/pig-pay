"use client";

import Link from "next/link";

import { CaretRight, Eye, EyeClosed } from "@phosphor-icons/react";

import { VisibilityValue } from "@/app/_components/visibility-value";
import { useToggle } from "@/app/_hooks/use-toggle";

interface Props {
  value: number;
}
export function CardTotal({ value }: Props) {
  const { toggle, status } = useToggle();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">
            <VisibilityValue value={value} />
          </span>
          <button onClick={toggle}>
            {status ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        </div>
        <Link href="/transactions">
          <CaretRight />
        </Link>
      </div>
      <span className="text-sm">Saldo atual em contas</span>
    </div>
  );
}
