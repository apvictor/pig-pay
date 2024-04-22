import * as React from "react";

import { cn } from "@/app/_libs/utils";
import { Info } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, placeholder, type, error, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type={type}
          name={name}
          placeholder=" "
          className={cn(
            "flex w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer placeholder-shown:pt-1 h-14 pt-4",
            error ? "!border-red-400" : "border-input" && className
          )}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={name}
          className="absolute left-3 pointer-events-none text-gray-500 text-xs top-2 peer-placeholder-shown:text-base peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 transition-all"
        >
          {placeholder}
        </label>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              type="button"
              className="absolute text-red-400 right-3"
            >
              {error && <Info size={20} />}
            </TooltipTrigger>
            <TooltipContent>{error}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
