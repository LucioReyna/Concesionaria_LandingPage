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
        <section className="py-20 bg-gradient-to-b from-[#0f1014] to-[#121318]">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Lo que dicen nuestros clientes"
                    subtitle="La satisfacción de quienes ya confían en nosotros."
                    className="mb-12"
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Testimonials Column */}
                    <div className="space-y-6">
                        <div className="grid gap-6">
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

                        {/* Trust Badges or similar could go here */}
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mt-6">
                            <h4 className="font-bold text-primary mb-2">¿Por qué elegirnos?</h4>
                            <p className="text-sm text-muted-foreground">
                                Más de 10 años de trayectoria y 500+ clientes satisfechos nos avalan. Transparencia total en cada operación.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                        {/* Gradient glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

                        <h3 className="text-2xl font-bold mb-6 relative z-10">Contáctanos</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="contact-name">Nombre</Label>
                                    <Input id="contact-name" placeholder="Tu nombre" required className="bg-background/50 border-white/10 focus:border-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact-phone">Teléfono</Label>
                                    <Input id="contact-phone" placeholder="Tu teléfono" type="tel" required className="bg-background/50 border-white/10 focus:border-primary/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact-email">Email</Label>
                                <Input id="contact-email" placeholder="tucorreo@ejemplo.com" type="email" required className="bg-background/50 border-white/10 focus:border-primary/50" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact-message">Mensaje</Label>
                                <Textarea id="contact-message" placeholder="¿En qué podemos ayudarte?" required className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50" />
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 text-base font-medium shadow-lg shadow-primary/20" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
