import { CreditCard, Shield, Wrench } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"
import { SectionTitle } from "@/components/ui/section-title"

const services = [
    {
        icon: CreditCard,
        title: "Créditos a Medida",
        description: "Financiación flexible con las mejores tasas del mercado. Aprobación en el acto."
    },
    {
        icon: Shield,
        title: "Garantía Extendida",
        description: "Cobertura completa para tu tranquilidad. Planes de 12, 24 y 36 meses."
    },
    {
        icon: Wrench,
        title: "Servicio Técnico",
        description: "Taller especializado multimarca con repuestos originales y técnicos certificados."
    }
]

export function ServicesSection() {
    return (
        <section id="financing" className="py-20 bg-background/50 relative overflow-hidden">
            {/* Decorator */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Financiación y Servicios"
                    subtitle="Soluciones integrales para acompañarte en cada kilómetro."
                    align="center"
                    className="mb-16"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
