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

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      full_name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      vehicle_interest_id: formData.get("vehicle_interest_id") || null,
      website: formData.get("website"), // Honeypot
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo a la brevedad.",
        })
          ; (e.target as HTMLFormElement).reset()
      } else {
        const error = await response.json()
        throw new Error(error.error || "Algo salió mal")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al enviar el mensaje.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <div className="py-24 text-center space-y-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">Atención Personalizada</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground tracking-tight italic">Contáctenos</h1>
          <p className="text-muted-foreground/60 max-w-2xl mx-auto font-light tracking-wide text-lg">
            Estamos a su disposición para asesorarle en cada etapa de su próxima adquisición.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto items-start">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium border-b border-white/5 pb-4">Canales de Comunicación</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/40 font-medium">Ubicación</p>
                    <p className="text-lg font-serif italic text-foreground/90">{siteConfig.address.full}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/40 font-medium">Teléfono Directo</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-lg font-serif italic text-foreground/90 hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/40 font-medium">Email Institucional</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg font-serif italic text-foreground/90 hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/40 font-medium">Horarios de Salón</p>
                    <div className="text-sm font-light text-muted-foreground/80 space-y-1">
                      <p>{siteConfig.hours.weekdays}</p>
                      <p>{siteConfig.hours.saturday}</p>
                      <p className="italic text-primary/60">{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="group relative h-80 rounded-none overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button variant="outline" className="rounded-none bg-background/80 backdrop-blur-md border-white/10 tracking-widest uppercase">
                  Abrir Dirección en Mapas
                </Button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card/30 border border-white/5 rounded-none p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />

            <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                <h3 className="text-4xl font-serif font-medium tracking-tight italic">Escríbanos</h3>
                <p className="text-sm text-muted-foreground font-light tracking-wide">
                  Inicie una gestión privada y reciba asesoramiento exclusivo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Honeypot and Hidden Fields */}
                <input type="text" name="website" className="hidden" aria-hidden="true" />
                <input type="hidden" name="vehicle_interest_id" value="" />

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">Nombre Completo</Label>
                    <Input id="name" placeholder="Ej: Julian Martinez" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">Teléfono de Contacto</Label>
                    <Input id="phone" placeholder="+54 11 ..." type="tel" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">Dirección de Email</Label>
                  <Input id="email" placeholder="julian@ejemplo.com" type="email" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">Consulta o Vehículo de Interés</Label>
                  <Textarea id="message" placeholder="¿Cómo podemos asistirle hoy?" required className="min-h-[120px] rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-16 text-[10px] tracking-[0.4em] uppercase transition-all duration-500 shadow-lg shadow-black/20" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Procesando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
