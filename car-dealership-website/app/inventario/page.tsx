"use client"

import { useState, useMemo } from "react"
import { vehicles, filterOptions } from "@/lib/mock-data"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Filter, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SectionTitle } from "@/components/ui/section-title"

export default function InventoryPage() {
    const [filters, setFilters] = useState({
        make: "Todas",
        priceRange: "Cualquier Precio",
        yearRange: "Cualquier Año",
        search: "",
    })

    // Filter Logic
    const filteredVehicles = useMemo(() => {
        return vehicles.filter((v) => {
            // 1. Search (Make/Model)
            const searchMatch =
                filters.search === "" ||
                `${v.make} ${v.model}`.toLowerCase().includes(filters.search.toLowerCase())

            // 2. Make
            const makeMatch = filters.make === "Todas" || v.make === filters.make

            // 3. Price
            const priceRange = filterOptions.priceRanges.find((r) => r.label === filters.priceRange)
            const priceMatch = !priceRange || (v.price >= priceRange.min && v.price <= priceRange.max)

            // 4. Year
            const yearRange = filterOptions.yearRanges.find((r) => r.label === filters.yearRange)
            const yearMatch = !yearRange || (v.year >= yearRange.min && v.year <= yearRange.max)

            return searchMatch && makeMatch && priceMatch && yearMatch
        })
    }, [filters])

    const clearFilters = () => {
        setFilters({
            make: "Todas",
            priceRange: "Cualquier Precio",
            yearRange: "Cualquier Año",
            search: "",
        })
    }

    return (
        <div className="min-h-screen pt-20 pb-20">
            {/* Mini Hero */}
            <div className="bg-gradient-to-r from-slate-900 to-[#0f1014] py-16 border-b border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Inventario</h1>
                    <p className="text-muted-foreground max-w-xl mx-auto">Encuentra el vehículo de tus sueños entre nuestra selección certificada.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                {/* Search & Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-4 mb-10 items-center justify-between bg-card/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">

                    {/* Search Input */}
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Buscar por marca o modelo..."
                            className="pl-9 bg-background/50 border-white/10"
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />
                    </div>

                    {/* Desktop Filters */}
                    <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
                        <Select value={filters.make} onValueChange={(v) => setFilters({ ...filters, make: v })}>
                            <SelectTrigger className="w-[180px] bg-background/50 border-white/10">
                                <SelectValue placeholder="Marca" />
                            </SelectTrigger>
                            <SelectContent>
                                {filterOptions.makes.map(m => (
                                    <SelectItem key={m} value={m}>{m}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={filters.priceRange} onValueChange={(v) => setFilters({ ...filters, priceRange: v })}>
                            <SelectTrigger className="w-[180px] bg-background/50 border-white/10">
                                <SelectValue placeholder="Precio" />
                            </SelectTrigger>
                            <SelectContent>
                                {filterOptions.priceRanges.map(p => (
                                    <SelectItem key={p.label} value={p.label}>{p.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={filters.yearRange} onValueChange={(v) => setFilters({ ...filters, yearRange: v })}>
                            <SelectTrigger className="w-[180px] bg-background/50 border-white/10">
                                <SelectValue placeholder="Año" />
                            </SelectTrigger>
                            <SelectContent>
                                {filterOptions.yearRanges.map(y => (
                                    <SelectItem key={y.label} value={y.label}>{y.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {(filters.make !== "Todas" || filters.priceRange !== "Cualquier Precio" || filters.search !== "") && (
                            <Button variant="ghost" onClick={clearFilters} className="text-destructive hover:text-destructive/80">
                                <X className="w-4 h-4 mr-2" /> Borrar
                            </Button>
                        )}
                    </div>

                    {/* Mobile Filter Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="lg:hidden w-full gap-2">
                                <Filter className="w-4 h-4" /> Filtros
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Filtrar Inventario</SheetTitle>
                            </SheetHeader>
                            <div className="space-y-6 mt-8">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Marca</Label>
                                    <Select value={filters.make} onValueChange={(v) => setFilters({ ...filters, make: v })}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Marca" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {filterOptions.makes.map(m => (
                                                <SelectItem key={m} value={m}>{m}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                {/* ... Add other mobile filters similarly ... */}
                                <Button onClick={clearFilters} variant="destructive" className="w-full">Limpiar Filtros</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Results */}
                {filteredVehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredVehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground">No se encontraron vehículos que coincidan con tu búsqueda.</p>
                        <Button variant="link" onClick={clearFilters} className="mt-4 text-primary">
                            Ver todo el inventario
                        </Button>
                    </div>
                )}

                {/* Load More Mock */}
                {filteredVehicles.length > 0 && (
                    <div className="mt-16 text-center">
                        <Button variant="outline" className="min-w-[200px] border-white/10 hover:bg-white/5">
                            Cargar Más
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

function Label({ className, children, ...props }: React.ComponentProps<"label">) {
    return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>{children}</label>
}
