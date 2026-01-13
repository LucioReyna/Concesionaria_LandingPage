"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Percent, ArrowLeftRight, Zap, Calendar, CheckCircle } from "lucide-react"

const benefits = [
  { icon: Percent, text: "Ofertas de 0% APR Disponibles" },
  { icon: ArrowLeftRight, text: "Aceptamos tu Auto a Cuenta" },
  { icon: Zap, text: "Proceso de Aprobación Rápido" },
  { icon: Calendar, text: "Plazos de Pago Flexibles" },
]

export function FinancingTeaser() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio"
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Ingresa un número de teléfono válido"
    }
    if (!formData.budget.trim()) newErrors.budget = "El presupuesto es obligatorio"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      toast({
        title: "¡Solicitud de pre-aprobación enviada!",
        description: "Te contactaremos en 15 minutos.",
      })
    }
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Financiamiento Flexible y Sencillo</h2>
              <p className="text-muted-foreground text-lg">
                Ponte al volante más rápido con nuestro proceso de financiamiento simplificado. Ya sea que tengas crédito perfecto o
                estés reconstruyéndolo, tenemos opciones para ti.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="/financing">Ver Opciones de Financiamiento</Link>
            </Button>
          </div>

          {/* Right: Mini Pre-Approval Form */}
          <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="text-xl font-semibold mb-2">Obtén Pre-Aprobación</h3>
            <p className="text-sm text-muted-foreground mb-6">Verificación rápida sin impacto en tu historial crediticio</p>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">¡Solicitud Enviada!</p>
                  <p className="text-sm text-muted-foreground mt-1">Nuestro equipo te contactará en 15 minutos.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="preapproval-name">Nombre Completo</Label>
                  <Input
                    id="preapproval-name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preapproval-phone">Número de Teléfono</Label>
                  <Input
                    id="preapproval-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preapproval-budget">Presupuesto Mensual</Label>
                  <Input
                    id="preapproval-budget"
                    placeholder="$500 - $800/mo"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={errors.budget ? "border-destructive" : ""}
                  />
                  {errors.budget && <p className="text-xs text-destructive">{errors.budget}</p>}
                </div>

                <Button type="submit" className="w-full">
                  Ver Mis Opciones
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
