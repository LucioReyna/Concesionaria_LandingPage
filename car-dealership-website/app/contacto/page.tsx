"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { SectionTitle } from "@/components/ui/section-title"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    })
      ; (e.target as HTMLFormElement).reset()
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/50 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contáctanos"
          subtitle="Estamos aquí para asesorarte en la compra de tu próximo vehículo."
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 space-y-8">
              <h3 className="text-2xl font-bold">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Visítanos</p>
                    <p className="text-muted-foreground">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Llámanos</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-white transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Escríbenos</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-white transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Horarios</p>
                    <p className="text-muted-foreground">{siteConfig.hours.weekdays}</p>
                    <p className="text-muted-foreground">{siteConfig.hours.saturday}</p>
                    <p className="text-muted-foreground">{siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden bg-card/40 border border-white/5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
              <Button variant="secondary" className="relative z-10 shadow-xl">
                <MapPin className="w-4 h-4 mr-2" /> Ver en Google Maps
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <h3 className="text-2xl font-bold mb-8">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Ej: Juan Pérez" required className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="Ej: +54 11 1234 5678" type="tel" required className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" placeholder="juan@ejemplo.com" type="email" required className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Consulta sobre financiación..." className="h-12 bg-background/50 border-white/10 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu consulta aquí..." required className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 resize-none p-4" />
              </div>

              <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 rounded-xl shadow-[0_4px_14px_0_rgba(30,107,255,0.39)] transition-all transform hover:-translate-y-0.5" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Consulta <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
