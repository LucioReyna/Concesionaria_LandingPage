import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Vehicle } from "@/lib/mock-data"

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(vehicle.price)

  const formattedMileage = new Intl.NumberFormat("en-US").format(vehicle.mileage)

  return (
    <Link href={`/inventario/${vehicle.slug}`}>
      <Card className="group overflow-hidden rounded-none border-white/5 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-500">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={vehicle.images[0] || "/placeholder.svg"}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] tracking-widest uppercase bg-background/60 backdrop-blur-md px-3 py-1 text-foreground border border-white/10">
              {vehicle.condition}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">
              {vehicle.make}
            </p>
            <h3 className="font-serif text-xl tracking-tight group-hover:text-primary transition-colors duration-300">
              {vehicle.model} <span className="font-sans font-light text-muted-foreground ml-1">{vehicle.year}</span>
            </h3>
          </div>

          <div className="flex flex-col gap-1 text-[11px] tracking-wider uppercase text-muted-foreground/60 border-t border-white/5 pt-4">
            <span>{formattedMileage} KM • {vehicle.transmission}</span>
            <span>{vehicle.fuelType}</span>
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-xl font-medium tracking-tighter text-foreground">{formattedPrice}</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">Detalles</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
