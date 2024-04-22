"use client";

import { useToggle } from "../_hooks/use-toggle";

import { formatCurrency } from "../_libs/format-currency";

interface Props {
  value: number;
}
export function VisibilityValue({ value }: Props) {
  const { status } = useToggle();

  return (
    <div>
      {status && (
        <span className="backdrop-blur-md">{formatCurrency(value)}</span>
      )}
      {!status && (
        <span className="blur-md backdrop-blur-md">
          {formatCurrency(value)}
        </span>
      )}
    </div>
  );
}
