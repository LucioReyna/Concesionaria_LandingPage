import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ContactLocation() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visita Nuestra Sala de Exhibición</h2>
              <p className="text-muted-foreground text-lg">
                Ven a ver nuestro inventario en persona. Nuestro amigable equipo está listo para ayudarte a encontrar tu vehículo perfecto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-muted-foreground">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Correo Electrónico</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Horarios</p>
                  <p className="text-muted-foreground">{siteConfig.hours.weekdays}</p>
                  <p className="text-muted-foreground">{siteConfig.hours.saturday}</p>
                  <p className="text-muted-foreground">{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar a Ventas
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border bg-card h-80 lg:h-auto min-h-[320px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="font-semibold text-lg mb-2">Mapa Interactivo</p>
              <p className="text-sm text-muted-foreground mb-4">{siteConfig.address.full}</p>
              <Button asChild variant="outline" size="sm">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo Llegar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
