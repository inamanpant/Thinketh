import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { pillars } from "@/data/questions";

const nav = [
  { to: "/pillars", label: "Pillars" },
  { to: "/assessment", label: "Assessment" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          think<span className="text-primary">eth</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">think<span className="text-primary">eth</span></p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Don't just learn what to think. Learn how to think. Live online for Class 5–12.</p>
        </div>
        <nav aria-label="Pillars" className="grid grid-cols-2 gap-2 text-sm">
          {pillars.map((p) => (
            <Link key={p.slug} to="/$pillar" params={{ pillar: p.slug }} className="text-muted-foreground hover:text-primary">
              {p.name}: {p.tagline.split(",")[0]}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/support" className="text-muted-foreground hover:text-primary">Support a student</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary">Talk to us</Link>
          <a href="https://www.instagram.com/thinketh_in/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Instagram ↗</a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Thinketh</p>
    </footer>
  );
}
