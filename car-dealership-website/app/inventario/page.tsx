"use client"

import { useState, useMemo } from "react"
import { vehicles, filterOptions } from "@/lib/mock-data"
import { VehicleCard } from "@/components/ui/vehicle-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Filter, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

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
        <div className="min-h-screen pt-24 pb-32 bg-background">
            {/* Elegant Header */}
            <div className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center space-y-6 text-reveal">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">Curaduría Automotriz</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground tracking-tight italic">Nuestra Colección</h1>
                        <p className="text-muted-foreground/60 max-w-2xl mx-auto font-light tracking-wide text-lg">
                            Descubra una selección única de vehículos certificados, donde cada unidad ha sido
                            inspeccionada bajo los estándares más rigurosos de calidad y rendimiento.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20">
                {/* Search & Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-8 mb-20 items-end justify-between">

                    {/* Search Input */}
                    <div className="relative w-full lg:w-96 group">
                        <Label htmlFor="search" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-3 block font-medium">Búsqueda Directa</Label>
                        <div className="relative">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                            <Input
                                id="search"
                                placeholder="Busque por Marca o Modelo"
                                className="pl-8 rounded-none bg-transparent border-0 border-b border-white/10 hover:border-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg"
                                value={filters.search}
                                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Desktop Filters */}
                    <div className="hidden lg:flex items-end gap-10 flex-1 justify-end">
                        <div className="space-y-3">
                            <Label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 font-medium">Marca</Label>
                            <Select value={filters.make} onValueChange={(v) => setFilters({ ...filters, make: v })}>
                                <SelectTrigger className="w-[180px] rounded-none bg-transparent border-0 border-b border-white/10 focus:ring-0 px-0">
                                    <SelectValue placeholder="Marca" />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-white/10 bg-card">
                                    {filterOptions.makes.map(m => (
                                        <SelectItem key={m} value={m} className="rounded-none">{m}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 font-medium">Inversión</Label>
                            <Select value={filters.priceRange} onValueChange={(v) => setFilters({ ...filters, priceRange: v })}>
                                <SelectTrigger className="w-[180px] rounded-none bg-transparent border-0 border-b border-white/10 focus:ring-0 px-0">
                                    <SelectValue placeholder="Precio" />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-white/10 bg-card">
                                    {filterOptions.priceRanges.map(p => (
                                        <SelectItem key={p.label} value={p.label} className="rounded-none">{p.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 font-medium">Año / Época</Label>
                            <Select value={filters.yearRange} onValueChange={(v) => setFilters({ ...filters, yearRange: v })}>
                                <SelectTrigger className="w-[180px] rounded-none bg-transparent border-0 border-b border-white/10 focus:ring-0 px-0">
                                    <SelectValue placeholder="Año" />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-white/10 bg-card">
                                    {filterOptions.yearRanges.map(y => (
                                        <SelectItem key={y.label} value={y.label} className="rounded-none">{y.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {(filters.make !== "Todas" || filters.priceRange !== "Cualquier Precio" || filters.search !== "") && (
                            <Button variant="ghost" onClick={clearFilters} className="text-[10px] tracking-[0.2em] uppercase text-primary hover:bg-transparent">
                                <X className="w-4 h-4 mr-2" /> Limpiar
                            </Button>
                        )}
                    </div>

                    {/* Mobile Filter Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="lg:hidden w-full rounded-none tracking-widest uppercase py-6 border-white/10">
                                <Filter className="w-4 h-4 mr-2" /> Filtrar
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-background border-white/5">
                            <SheetHeader className="mb-10 text-left">
                                <SheetTitle className="font-serif text-3xl">Filtrar Colección</SheetTitle>
                            </SheetHeader>
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <Label className="text-[10px] tracking-widest uppercase text-muted-foreground/40">Por Marca</Label>
                                    <Select value={filters.make} onValueChange={(v) => setFilters({ ...filters, make: v })}>
                                        <SelectTrigger className="w-full rounded-none bg-transparent border-white/10 focus:ring-0">
                                            <SelectValue placeholder="Marca" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-none">
                                            {filterOptions.makes.map(m => (
                                                <SelectItem key={m} value={m}>{m}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button onClick={clearFilters} variant="outline" className="w-full rounded-none tracking-widest uppercase border-primary/20 text-primary">Reiniciar Filtros</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Results */}
                {filteredVehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {filteredVehicles.map((vehicle) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40 border border-white/5 bg-card/10">
                        <p className="text-2xl font-serif italic text-muted-foreground/60 mb-6 font-light">
                            No se encontraron unidades que coincidan con su selección.
                        </p>
                        <Button variant="outline" onClick={clearFilters} className="rounded-none tracking-widest uppercase px-10 py-6 border-white/10 border text-foreground">
                            Ver Colección Completa
                        </Button>
                    </div>
                )}

                {/* Load More Mock */}
                {filteredVehicles.length > 0 && (
                    <div className="mt-32 text-center pb-20">
                        <Button variant="outline" className="rounded-none min-w-[300px] h-16 tracking-[0.3em] uppercase border-white/10 border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-500">
                            Cargar más unidades
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
