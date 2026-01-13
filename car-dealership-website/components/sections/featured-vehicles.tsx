import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { SectionTitle } from "@/components/ui/section-title"
import { vehicles } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function FeaturedVehicles() {
  const featured = vehicles.filter(v => v.isFeatured).slice(0, 4)

  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <SectionTitle
            title="Nuestros Vehículos Destacados"
            subtitle="Una selección exclusiva de nuestras mejores unidades, inspeccionadas y listas para transferir."
            className="mb-0"
          />
          <Button asChild variant="ghost" className="hidden md:flex group text-primary hover:text-primary/80 hover:bg-primary/5">
            <Link href="/inventario">
              Ver todo el inventario <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
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
