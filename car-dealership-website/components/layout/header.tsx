"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Car } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Inventario", href: "/inventario" },
  { name: "Financiación", href: "/#financing" },
  { name: "Servicios", href: "/#services" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif font-semibold tracking-tighter text-foreground group-hover:text-primary transition-colors uppercase">
            AutoElite
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-primary relative group/link ${isActive ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover/link:w-full ${isActive ? "w-full" : ""}`} />
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 tracking-widest text-[10px] uppercase transition-all duration-300">
            <Link href="/contacto">Consulta Exclusiva</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-white/5 w-full sm:w-80 p-0">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-10 p-10 h-full">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-serif font-bold text-foreground tracking-tighter uppercase">AutoElite</span>
              </Link>

              <nav className="flex flex-col gap-8 mt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <Button asChild className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase py-6">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>Contáctanos</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
