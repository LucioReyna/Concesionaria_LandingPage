"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { SectionTitle } from "@/components/ui/section-title"
import { Loader2, Send } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export function TestimonialsContact() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log("Form submitted")

        setIsSubmitting(false)
        toast({
            title: "Mensaje enviado",
            description: "Nos pondremos en contacto contigo a la brevedad.",
        })

        // Reset form (optional)
        const form = e.target as HTMLFormElement
        form.reset()
    }

    // Use 2 testimonials from mock data or hardcoded
    const displayTestimonials = testimonials.slice(0, 2)

    return (
        <section className="py-32 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Testimonials Column */}
                    <div className="space-y-16">
                        <SectionTitle
                            title="La Voz de la Experiencia"
                            subtitle="Testimonios de quienes han descubierto un nuevo estándar en el mundo automotriz."
                            className="mb-0"
                        />

                        <div className="grid gap-12">
                            {displayTestimonials.map((t) => (
                                <TestimonialCard
                                    key={t.id}
                                    name={t.name}
                                    rating={t.rating}
                                    text={t.quote}
                                    date={t.date}
                                />
                            ))}
                        </div>

                        <div className="p-10 rounded-none bg-primary/5 border border-primary/10">
                            <h4 className="font-serif text-xl mb-4 text-primary">Compromiso con la Excelencia</h4>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                Con más de una década redefiniendo el mercado de lujo, nuestra misión permanece inalterable:
                                entregar no solo un vehículo, sino una pieza de ingeniería que trascienda el tiempo.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="bg-card/30 border border-white/5 rounded-none p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-serif font-medium tracking-tight">Inicie su Gestión</h3>
                                <p className="text-sm text-muted-foreground font-light tracking-wide">
                                    Complete el siguiente formulario para recibir una atención personalizada y exclusiva por parte de nuestros especialistas.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <Label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Nombre Completo</Label>
                                        <Input id="contact-name" placeholder="Ej: Julian Martinez" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="contact-phone" className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Teléfono</Label>
                                        <Input id="contact-phone" placeholder="+54 11 ..." type="tel" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Dirección de Email</Label>
                                    <Input id="contact-email" placeholder="julian@ejemplo.com" type="email" required className="rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg" />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Mensaje o Interés</Label>
                                    <Textarea id="contact-message" placeholder="¿En qué vehículo o servicio está interesado?" required className="min-h-[100px] rounded-none bg-transparent border-0 border-b border-white/10 px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors text-lg resize-none" />
                                </div>

                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-16 text-[10px] tracking-[0.4em] uppercase transition-all duration-500" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Procesando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitud
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
