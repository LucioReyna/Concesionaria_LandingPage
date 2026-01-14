import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, HeartHandshake } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-1/3 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium border-b border-primary/30 pb-2">
              Selección Exclusiva 2026
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl space-y-6 animate-fade-in-up delay-100 opacity-0 [animation-fill-mode:forwards]">
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] text-foreground tracking-tight">
              La Excelencia <br />
              <span className="italic">Hecha Movimiento.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              Descubra una colección curada de los vehículos más extraordinarios del mundo.
              Donde el rendimiento inigualable se encuentra con la artesanía absoluta.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in-up delay-200 opacity-0 [animation-fill-mode:forwards]">
            <Button asChild size="lg" className="rounded-none h-16 px-12 text-[10px] tracking-[0.3em] uppercase bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500">
              <Link href="/inventario">Explorar Colección</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none h-16 px-12 text-[10px] tracking-[0.3em] uppercase border-white/10 hover:border-primary/50 text-foreground transition-all duration-500 bg-transparent">
              <Link href="/contacto">Consulta Privada</Link>
            </Button>
          </div>

          {/* Featured Car Suggestion */}
          <div className="relative w-full max-w-6xl pt-8 animate-reveal delay-500 opacity-0 [animation-fill-mode:forwards]">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
                alt="Porsche 911"
                fill
                className="object-cover grayscale-[0.2] contrast-[1.1]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Overlay Specs */}
            <div className="absolute bottom-12 left-12 hidden md:block text-left border-l border-primary/30 pl-6">
              <p className="text-[10px] tracking-widest uppercase text-primary mb-1">Modelo Destacado</p>
              <h3 className="text-2xl font-serif">Porsche 911 GT3</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
