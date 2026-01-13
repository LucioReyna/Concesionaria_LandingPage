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
      <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={vehicle.images[0] || "/placeholder.svg"}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge
              variant={
                vehicle.condition === "Nuevo" ? "default" : vehicle.condition === "Certificado" ? "secondary" : "outline"
              }
              className="text-xs"
            >
              {vehicle.condition}
            </Badge>
            {vehicle.bodyType && (
              <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                {vehicle.bodyType}
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {formattedMileage} millas • {vehicle.transmission} • {vehicle.fuelType}
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-xl font-bold text-primary">{formattedPrice}</span>
            <span className="text-xs text-muted-foreground">Ver Detalles →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
