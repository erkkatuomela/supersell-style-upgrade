import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>{children}</div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/35 bg-primary/5 px-4 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  href = "#",
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "ink" | "inverted";
  className?: string;
  href?: string;
}) {
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_10px_30px_-14px_color-mix(in_oklab,var(--brand)_70%,transparent)]",
    outline: "border border-border bg-card text-foreground hover:bg-secondary",
    ink: "bg-ink text-background hover:opacity-90",
    inverted: "border border-background/25 text-background hover:bg-background/10",
  }[variant];

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="font-display text-lg font-bold uppercase tracking-[0.06em]">
      <span className="text-primary">Super</span>
      <span className={inverted ? "text-background" : "text-foreground"}>Sell</span>
    </span>
  );
}
