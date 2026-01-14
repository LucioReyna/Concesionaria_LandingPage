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
        <section id="services" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Exclusividad y Soporte"
                    subtitle="Servicios de conserjería diseñados para superar las expectativas más exigentes."
                    align="center"
                    className="mb-20"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
