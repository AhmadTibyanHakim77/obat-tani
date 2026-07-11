import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:focus-ring disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" && "bg-forest text-white shadow-soft hover:-translate-y-0.5 hover:bg-leaf",
        variant === "secondary" && "border border-forest/15 bg-white/75 text-forest hover:bg-cream",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
