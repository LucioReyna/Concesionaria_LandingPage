import { Shield, DollarSign, HeadphonesIcon, MapPin, Star, Car, Clock } from "lucide-react"

const valueProps = [
  {
    icon: Shield,
    title: "Inspecciones Certificadas",
    description: "Cada vehículo se somete a una rigurosa inspección de 150 puntos antes de llegar a nuestro lote.",
  },
  {
    icon: DollarSign,
    title: "Precios Transparentes",
    description: "Sin tarifas ocultas, sin sorpresas. El precio que ves es el precio que pagas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Post-Venta",
    description: "Nuestra relación no termina en la compra. Estamos aquí para servicios y soporte continuo.",
  },
  {
    icon: MapPin,
    title: "Distribuidor Local de Confianza",
    description: "Sirviendo a nuestra comunidad por más de 15 años con integridad y excelencia.",
  },
]

const metrics = [
  { icon: Star, value: "4.8★", label: "Calificación Promedio" },
  { icon: Car, value: "1,200+", label: "Autos Vendidos" },
  { icon: Clock, value: "Mismo Día", label: "Pruebas de Manejo" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegir AutoElite?</h2>
          <p className="text-muted-foreground text-lg">
            No solo vendemos autos — construimos relaciones duraderas basadas en confianza, transparencia y
            servicio excepcional.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <prop.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
              <p className="text-sm text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <metric.icon className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-bold">{metric.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
