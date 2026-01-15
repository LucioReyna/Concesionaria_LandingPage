export const runtime = 'edge';
export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { vehicles } from "@/lib/mock-data"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { VehicleGallery } from "@/components/ui/vehicle-gallery"
import { ArrowLeft, Gauge, Settings, Fuel, CheckCircle, Share2 } from "lucide-react"

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
        <div className="pt-24 pb-32 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                {/* Back Link */}
                <div className="mb-12">
                    <Link
                        href="/inventario"
                        className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 hover:text-primary transition-colors font-medium"
                    >
                        <ArrowLeft className="w-3 h-3 mr-3" />
                        Regresar a la Colección
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left Column: Gallery & Details */}
                    <div className="lg:col-span-2 space-y-20">
                        <VehicleGallery
                            images={vehicle.images}
                            alt={`${vehicle.make} ${vehicle.model}`}
                        />

                        <div className="space-y-12">
                            <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium border-b border-white/5 pb-4">Especificaciones Destacadas</h3>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {vehicle.highlights.concat(vehicle.features).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 py-2 border-b border-white/[0.03]">
                                        <CheckCircle className="w-3 h-3 text-primary/60 flex-shrink-0" />
                                        <span className="text-sm font-light tracking-wide text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium border-b border-white/5 pb-4">El Legado de este Vehículo</h3>
                            <p className="text-lg font-light leading-relaxed text-muted-foreground/80 italic font-serif">
                                Una pieza de ingeniería excepcional que redefine los estándares de su categoría.
                                Este {vehicle.make} {vehicle.model} ha sido rigurosamente evaluado para asegurar
                                una experiencia de conducción inigualable.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Pricing & Actions */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-10 rounded-none bg-card/20 backdrop-blur-md border border-white/5 space-y-10">
                                <div className="space-y-2">
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">{vehicle.condition}</span>
                                    <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight italic">
                                        {vehicle.make} <br />
                                        <span className="not-italic font-light">{vehicle.model}</span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground/60 font-light tracking-widest">{vehicle.year}</p>
                                </div>

                                <div className="text-4xl font-light tracking-tighter text-foreground border-t border-white/5 pt-8">
                                    ${vehicle.price.toLocaleString("en-US")}
                                </div>

                                <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-white/5 pt-10">
                                    <div className="space-y-2">
                                        <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-medium">Kilometraje</span>
                                        <div className="flex items-center gap-2 text-sm font-light">
                                            <Gauge className="w-3 h-3 text-primary/60" />
                                            {vehicle.mileage.toLocaleString()} km
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-medium">Transmisión</span>
                                        <div className="flex items-center gap-2 text-sm font-light">
                                            <Settings className="w-3 h-3 text-primary/60" />
                                            {vehicle.transmission}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-medium">Motorización</span>
                                        <div className="flex items-center gap-2 text-sm font-light">
                                            <Fuel className="w-3 h-3 text-primary/60" />
                                            {vehicle.engineSize}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-medium">Ubicación</span>
                                        <div className="flex items-center gap-2 text-sm font-light">
                                            <Share2 className="w-3 h-3 text-primary/60" />
                                            Showroom Central
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <Button className="w-full h-16 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] tracking-[0.3em] uppercase transition-all duration-500">
                                        Solicitar Concierge
                                    </Button>
                                    <Button variant="outline" className="w-full h-16 rounded-none border-white/10 hover:border-primary/40 text-foreground text-[10px] tracking-[0.3em] uppercase bg-transparent transition-all duration-500">
                                        Plan de Inversión
                                    </Button>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 bg-transparent space-y-6">
                                <h4 className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">Compromiso AutoElite</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs font-light text-muted-foreground/80 leading-relaxed">
                                        <CheckCircle className="w-3 h-3 text-primary/60 mt-0.5" />
                                        Inspección técnica detallada de 150 puntos.
                                    </li>
                                    <li className="flex items-start gap-3 text-xs font-light text-muted-foreground/80 leading-relaxed">
                                        <CheckCircle className="w-3 h-3 text-primary/60 mt-0.5" />
                                        Garantía de procedencia y documentación.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Vehicles */}
                {relatedVehicles.length > 0 && (
                    <div className="mt-40 border-t border-white/5 pt-24">
                        <div className="flex justify-between items-end mb-16">
                            <div className="space-y-4">
                                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">Recomendaciones</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground italic">Unidades Similares</h2>
                            </div>
                            <Button asChild variant="link" className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary p-0">
                                <Link href="/inventario">Ver Todo el Inventario</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
