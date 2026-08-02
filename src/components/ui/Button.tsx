import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base rounded-lg transition-all duration-300";

  const variants = {
    primary: "bg-accent text-primary glow-button hover:bg-accent/90",
    secondary: "bg-secondary text-white glow-hover hover:bg-secondary/80",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-primary glow-button",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
