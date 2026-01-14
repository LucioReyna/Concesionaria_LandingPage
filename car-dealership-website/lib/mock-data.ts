export interface Vehicle {
  id: string
  slug: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  condition: "Nuevo" | "Usado" | "Certificado"
  bodyType: "Sedán" | "SUV" | "Camioneta" | "Coupé" | "Hatchback" | "Convertible"
  transmission: "Automática" | "Manual"
  fuelType: "Gasolina" | "Diesel" | "Híbrido" | "Eléctrico"
  exteriorColor: string
  interiorColor: string
  engineSize: string
  vin: string
  features: string[]
  images: string[]
  isFeatured: boolean
  highlights: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
  date: string
  carPurchased: string
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    slug: "2023-bmw-m4-competition",
    make: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 92500,
    mileage: 1200,
    condition: "Certificado",
    bodyType: "Coupé",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Brooklyn Grey",
    interiorColor: "Cuero Merino Kyalami Orange",
    engineSize: "3.0L I6 Twin-Turbo",
    vin: "WBS53AY0XP8G12345",
    features: ["Paquete M Carbon", "Diferencial M Sport", "Harman Kardon", "Live Cockpit Professional"],
    images: ["/bmw-m4-competition-grey-sports-car-front-view.jpg", "/bmw-m4-competition-rear-angle-view.jpg", "/bmw-m4-competition-interior-luxury-leather.jpg"],
    isFeatured: true,
    highlights: ["Mantenimiento incluido", "Manual de 6 velocidades disponible", "Garantía de Fábrica"],
  },
  {
    id: "2",
    slug: "2022-audi-q8-prestige",
    make: "Audi",
    model: "Q8 Prestige",
    year: 2022,
    price: 84700,
    mileage: 8500,
    condition: "Usado",
    bodyType: "SUV",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Navarra Blue",
    interiorColor: "Piel Valcona Marrón",
    engineSize: "3.0L V6 Turbo",
    vin: "WA1AAAFV0ND123456",
    features: ["Virtual Cockpit Plus", "Suspensión Neumática", "Bang & Olufsen 3D", "Eje Trasero Direccional"],
    images: ["/audi-q8-blue-luxury-suv-front.jpg", "/audi-q8-side-profile-view.jpg", "/audi-q8-interior-brown-leather-modern.jpg"],
    isFeatured: true,
    highlights: ["Full Equipo", "Historial Limpio", "Tracción Quattro"],
  },
  {
    id: "3",
    slug: "2021-porsche-911-carrera",
    make: "Porsche",
    model: "911 Carrera",
    year: 2021,
    price: 125900,
    mileage: 4200,
    condition: "Usado",
    bodyType: "Coupé",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Guards Red",
    interiorColor: "Cuero Negro Sport",
    engineSize: "3.0L Flat-6 Twin-Turbo",
    vin: "WP0AA2A9XMS123456",
    features: ["Sport Chrono Package", "Escape Deportivo", "PASM", "Asientos Deportivos Plus"],
    images: ["/porsche-911-carrera-red-sports-car.jpg", "/porsche-911-rear-view-iconic-design.jpg", "/porsche-911-interior-black-leather-sporty.jpg"],
    isFeatured: true,
    highlights: ["Configuración Especial", "PPF Completo", "Legendario 911"],
  },
  {
    id: "4",
    slug: "2023-tesla-model-s-plaid",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2023,
    price: 108500,
    mileage: 1500,
    condition: "Certificado",
    bodyType: "Sedán",
    transmission: "Automática",
    fuelType: "Eléctrico",
    exteriorColor: "Pearl White",
    interiorColor: "Blanco Ultra",
    engineSize: "Tri-Motor AWD",
    vin: "5YJSA1E2XP1234567",
    features: ["Autopilot", "Yoke Steering", "Ludicrous Mode", "Supercharging Gratuito"],
    images: ["/tesla-model-s-plaid-white-electric-sedan.jpg", "/tesla-model-s-plaid-rear-sleek-design.jpg", "/tesla-model-s-interior-futuristic-yoke-steering.jpg"],
    isFeatured: true,
    highlights: ["0-100 en 2.1s", "Última Tecnología", "Sostenibilidad de Lujo"],
  },
  {
    id: "5",
    slug: "2022-mercedes-benz-gle-450",
    make: "Mercedes-Benz",
    model: "GLE 450",
    year: 2022,
    price: 72000,
    mileage: 12000,
    condition: "Usado",
    bodyType: "SUV",
    transmission: "Automática",
    fuelType: "Híbrido",
    exteriorColor: "Obsidian Black",
    interiorColor: "Beige Macchiato",
    engineSize: "3.0L I6 Turbo + EQ Boost",
    vin: "W1NFB6EB0NA123456",
    features: ["MBUX Hyperscreen", "Burmester Surround", "Head-Up Display", "Masaje en Asientos"],
    images: ["/mercedes-gle-450-black-luxury-suv.jpg", "/mercedes-gle-450-rear-three-quarter-view.jpg", "/mercedes-gle-interior-beige-leather-dashboard.jpg"],
    isFeatured: false,
    highlights: ["Confort Absoluto", "Tecnología Inteligente"],
  },
  {
    id: "6",
    slug: "2022-honda-crv-touring",
    make: "Honda",
    model: "CR-V Touring",
    year: 2022,
    price: 38000,
    mileage: 25000,
    condition: "Usado",
    bodyType: "SUV",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Sonic Gray",
    interiorColor: "Negro",
    engineSize: "1.5L Turbo",
    vin: "HKCRV202212345678",
    features: ["Honda Sensing", "Sunroof", "Baúl Eléctrico", "Apple CarPlay"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: false,
    highlights: ["Práctica", "Confiable", "Familiar"],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Cliente",
    quote: "Excelente atención y transparencia en todo el proceso. El auto está impecable.",
    rating: 5,
    date: "Hace 2 semanas",
    carPurchased: "BMW X5 2020"
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Cliente",
    quote: "Financiación rápida y muy clara. Me llevé el auto en el día.",
    rating: 5,
    date: "Hace 1 mes",
    carPurchased: "Audi A4 2019"
  }
]

export const filterOptions = {
  conditions: ["Todos", "Nuevo", "Usado", "Certificado"] as const,
  makes: ["Todas", "BMW", "Audi", "Ford", "Toyota", "Mercedes-Benz", "Honda", "Chevrolet", "Volkswagen"] as const,
  bodyTypes: ["Todos", "Sedán", "SUV", "Coupé", "Camioneta", "Hatchback", "Convertible"] as const,
  priceRanges: [
    { label: "Cualquier Precio", min: 0, max: Number.POSITIVE_INFINITY },
    { label: "Menos de $20k", min: 0, max: 20000 },
    { label: "$20k - $40k", min: 20000, max: 40000 },
    { label: "$40k - $60k", min: 40000, max: 60000 },
    { label: "Más de $60k", min: 60000, max: Number.POSITIVE_INFINITY },
  ],
  yearRanges: [
    { label: "Cualquier Año", min: 0, max: 9999 },
    { label: "2022+", min: 2022, max: 9999 },
    { label: "2020+", min: 2020, max: 9999 },
    { label: "2018+", min: 2018, max: 9999 },
  ],
  sortOptions: [
    { label: "Destacados", value: "featured" },
    { label: "Precio: Menor a Mayor", value: "price-asc" },
    { label: "Precio: Mayor a Menor", value: "price-desc" },
    { label: "Año: Más Reciente", value: "year-desc" },
    { label: "Año: Más Antiguo", value: "year-asc" },
    { label: "Kilometraje: Menor a Mayor", value: "mileage-asc" },
  ],
}
