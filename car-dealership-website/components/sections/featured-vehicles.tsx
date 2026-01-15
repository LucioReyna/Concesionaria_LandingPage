import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { SectionTitle } from "@/components/ui/section-title"
import { vehicles } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function FeaturedVehicles() {
  const featured = vehicles.filter(v => v.isFeatured).slice(0, 4)

  return (
    <section className="pt-16 pb-32 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle
            title="Inventario Selecto"
            subtitle="Una colección curada de vehículos que representan la cúspide de la ingeniería y el diseño automotriz."
            className="mb-0"
          />
          <Button asChild variant="ghost" className="hidden md:flex group text-primary hover:text-primary/80 hover:bg-transparent tracking-widest text-[10px] uppercase">
            <Link href="/inventario" className="flex items-center">
              Ver Colección Completa <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide -mx-6 px-6 pb-8 md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:mx-0 md:px-0">
          {featured.map((vehicle) => (
            <div key={vehicle.id} className="min-w-[280px] flex-[0_0_85%] md:min-w-0 md:flex-none snap-center">
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Button asChild variant="outline" className="w-full">
            <Link href="/inventario">Ver todo el inventario</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
