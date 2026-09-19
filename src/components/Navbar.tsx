import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#studio", label: "Studio" },
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
  { href: "#reach-us", label: "Reach Us" },
] as const

export function Navbar() {
  return (
    <header className="relative z-10">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6"
      >
        <a
          href="#home"
          className="text-3xl tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah
          <sup className="text-xs">®</sup>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                  "active" in link && link.active
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                aria-current={"active" in link && link.active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          type="button"
          variant="glass"
          size="auto"
          className="rounded-full px-6 py-2.5 text-sm text-foreground"
        >
          Begin Journey
        </Button>
      </nav>
    </header>
  )
}
