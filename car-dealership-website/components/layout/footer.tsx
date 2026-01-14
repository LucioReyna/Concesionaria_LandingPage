import Link from "next/link"
import { Car, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-serif font-bold text-foreground tracking-tighter uppercase group-hover:text-primary transition-colors">
                AutoElite
              </span>
            </Link>
            <p className="text-muted-foreground/60 text-[13px] leading-relaxed font-light tracking-wide max-w-xs">
              Redefiniendo el estándar automotriz de lujo.
              Selección exclusiva, servicios de conserjería y transparencia técnica absoluta en cada transacción.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-8">Navegación</h3>
            <ul className="space-y-4">
              {[
                { label: "El Inventario", href: "/inventario" },
                { label: "Gestión de Créditos", href: "/#financing" },
                { label: "Servicios VIP", href: "/#services" },
                { label: "Sobre Nosotros", href: "/sobre-nosotros" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground/70 hover:text-foreground transition-colors text-[13px] font-light tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-8">Oficina Central</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground/70 text-[13px] font-light tracking-wide">
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground/70 text-[13px] font-light tracking-wide">
                <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground/70 text-[13px] font-light tracking-wide">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-8">Conectar</h3>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground/50 hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5 stroke-[1.5px]" />
              </a>
              <a href="#" className="text-muted-foreground/50 hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5 stroke-[1.5px]" />
              </a>
              <a href="#" className="text-muted-foreground/50 hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5 stroke-[1.5px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground/40 text-[10px] tracking-widest uppercase font-light">
            © {new Date().getFullYear()} AutoElite Motors. Excelencia Garantizada.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase font-light text-muted-foreground/40">
            <Link href="#" className="hover:text-foreground transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Términos Legales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
