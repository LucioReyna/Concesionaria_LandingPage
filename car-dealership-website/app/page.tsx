export const runtime = 'edge';
import { Hero } from "@/components/sections/hero"
import { FeaturedVehicles } from "@/components/sections/featured-vehicles"
import { ServicesSection } from "@/components/sections/services"
import { TestimonialsContact } from "@/components/sections/testimonials-contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedVehicles />
      <ServicesSection />
      <TestimonialsContact />
    </div>
  )
}
