"use client"

import { Star } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No solo creas en nuestra palabra. Esto es lo que clientes reales dicen sobre su experiencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"
                      }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.carPurchased} • {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
