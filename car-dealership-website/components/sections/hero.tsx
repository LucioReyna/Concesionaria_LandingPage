import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, HeartHandshake } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f1014] to-[#0f1014]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1e6bff]/10 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="w-4 h-4 fill-primary" />
              <span>Innovación y Potencia</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              Tu próximo auto <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">te espera.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Los mejores vehículos, al mejor precio. Garantía certificada y financiamiento a tu medida en 24hs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(30,107,255,0.3)] hover:shadow-[0_0_30px_rgba(30,107,255,0.5)] transition-all">
                <Link href="/inventario">
                  Ver Inventario <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm">
                <Link href="/#financing">Financiación</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Garantía Extendida</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-primary" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center animate-fade-in-right delay-200">
            {/* Glow behind car */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75" />

            <div className="relative w-full h-full min-h-[300px] lg:min-h-[auto]">
              <Image
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
                alt="Vehículo Deportivo Premium"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(30,107,255,0.3)] transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
