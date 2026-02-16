"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Clock, Loader2 } from "lucide-react"
import { vehicles } from "@/lib/mock-data"

export function LeadCapture() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    message: "",
    website: "", // Honeypot
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const uniqueModels = vehicles.map((v) => ({
    id: v.id,
    label: `${v.year} ${v.make} ${v.model}`,
  }))

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido"
    }
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio"
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Ingresa un número de teléfono válido"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const payload = {
      full_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      vehicle_interest_id: formData.model !== "any" ? formData.model : null,
      website: formData.website,
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "¡Solicitud de prueba de manejo enviada!",
          description: "Te contactaremos en 15 minutos para confirmar.",
        })
      } else {
        const error = await response.json()
        throw new Error(error.error || "Algo salió mal")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "No se pudo procesar tu solicitud. Intenta más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Respuesta en menos de 15 minutos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para una Prueba de Manejo?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Completa el formulario a continuación y nuestro equipo se comunicará para agendar tu experiencia de prueba de manejo personalizada.
            </p>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h3>
              <p className="text-muted-foreground">
                Gracias por tu interés. Te contactaremos en breve para confirmar tu prueba de manejo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 md:p-8">
              {/* Honeypot */}
              <Input
                type="text"
                name="website"
                className="hidden"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Nombre Completo *</Label>
                  <Input
                    id="lead-name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                    required
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-email">Correo Electrónico *</Label>
                  <Input
                    id="lead-email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                    required
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Número de Teléfono *</Label>
                  <Input
                    id="lead-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                    required
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-model">Vehículo de Interés</Label>
                  <Select value={formData.model} onValueChange={(value) => setFormData({ ...formData, model: value })}>
                    <SelectTrigger id="lead-model">
                      <SelectValue placeholder="Selecciona un vehículo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Cualquier Vehículo</SelectItem>
                      {uniqueModels.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          {model.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="lead-message">Mensaje Adicional</Label>
                  <Textarea
                    id="lead-message"
                    placeholder="Cuéntanos sobre tu vehículo ideal, horario preferido para la prueba, o cualquier pregunta..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-xs text-muted-foreground">
                  Al enviar este formulario, aceptas ser contactado por nuestro equipo de ventas. Respetamos tu privacidad y nunca
                  compartiremos tu información.
                </p>
                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Procesando...
                    </>
                  ) : (
                    "Solicitar Prueba de Manejo"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
