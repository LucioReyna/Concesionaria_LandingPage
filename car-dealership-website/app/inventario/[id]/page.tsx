export const runtime = 'edge';
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { vehicles } from "@/lib/mock-data"
import { SectionTitle } from "@/components/ui/section-title"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { ArrowLeft, Calendar, Gauge, Settings, Fuel, CheckCircle, MessageCircle, CreditCard, Share2 } from "lucide-react"

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await params
    const vehicle = vehicles.find((v) => v.slug === id)

    if (!vehicle) {
        return { title: "Vehículo no encontrado" }
    }

    return {
        title: `${vehicle.year} ${vehicle.make} ${vehicle.model} | AutoElite`,
        description: `Detalles del ${vehicle.make} ${vehicle.model} ${vehicle.year}. Precio: $${vehicle.price}.`,
    }
}

export default async function VehicleDetailPage({ params }: PageProps) {
    const { id } = await params
    const vehicle = vehicles.find((v) => v.slug === id)

    if (!vehicle) {
        notFound()
    }

    const relatedVehicles = vehicles
        .filter((v) => v.id !== vehicle.id && (v.make === vehicle.make || v.bodyType === vehicle.bodyType))
        .slice(0, 3)

    return (
        <div className="pt-24 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-4">
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link
                        href="/inventario"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Inventario
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Left Column: Gallery */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-black/50">
                            <Image
                                src={vehicle.images[0] || "/placeholder.svg"}
                                alt={`${vehicle.make} ${vehicle.model}`}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary hover:bg-primary text-white text-sm px-3 py-1">
                                    {vehicle.condition}
                                </Badge>
                            </div>
                        </div>

                        {/* Thumbnails (Mock) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all opacity-70 hover:opacity-100">
                                    <Image
                                        src={vehicle.images[0] || "/placeholder.svg"} // Reusing same image for mock
                                        alt="Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6">Características Destacadas</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {vehicle.highlights.concat(vehicle.features).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-card/30 border border-white/5">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-sm md:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-white/10 shadow-glow space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold leading-tight mb-2">
                                        {vehicle.make} {vehicle.model} <span className="text-muted-foreground font-normal text-xl block mt-1">{vehicle.year}</span>
                                    </h1>
                                    <div className="text-4xl font-bold text-primary mt-4">
                                        ${vehicle.price.toLocaleString("en-US")}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-6 border-t border-white/10 border-b">
                                    <div className="space-y-1">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Kilometraje</span>
                                        <div className="flex items-center gap-2 font-medium">
                                            <Gauge className="w-4 h-4 text-primary" />
                                            {vehicle.mileage.toLocaleString()} km
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Transmisión</span>
                                        <div className="flex items-center gap-2 font-medium">
                                            <Settings className="w-4 h-4 text-primary" />
                                            {vehicle.transmission}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Combustible</span>
                                        <div className="flex items-center gap-2 font-medium">
                                            <Fuel className="w-4 h-4 text-primary" />
                                            {vehicle.fuelType}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Motor</span>
                                        <div className="flex items-center gap-2 font-medium">
                                            <Gauge className="w-4 h-4 text-primary" />
                                            {vehicle.engineSize}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Button className="w-full h-12 text-base bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-xl shadow-lg">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Consultar por WhatsApp
                                    </Button>
                                    <Button variant="outline" className="w-full h-12 text-base border-primary/20 hover:bg-primary/10 hover:text-primary rounded-xl">
                                        <CreditCard className="w-5 h-5 mr-2" />
                                        Solicitar Financiación
                                    </Button>
                                </div>

                                <div className="text-center pt-2">
                                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                                        <Share2 className="w-4 h-4 mr-2" /> Compartir Vehículo
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                                <h4 className="font-bold text-lg mb-2">Compra Segura</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" /> Inspección de 150 puntos
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" /> Garantía de 3 meses
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" /> Papeles al día
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Vehicles */}
                {relatedVehicles.length > 0 && (
                    <div className="mt-20">
                        <SectionTitle title="Vehículos Similares" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedVehicles.map(v => (
                                <VehicleCard key={v.id} vehicle={v} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
