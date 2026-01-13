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
    slug: "2020-bmw-x5",
    make: "BMW",
    model: "X5",
    year: 2020,
    price: 38500,
    mileage: 45000,
    condition: "Usado",
    bodyType: "SUV",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Negro Zafiro",
    interiorColor: "Cuero Merino Cognac",
    engineSize: "3.0L I6 Turbo",
    vin: "5UXCRABC123456789",
    features: ["Techo Panorámico", "Asistente de Estacionamiento", "Head-Up Display", "Asientos Calefactables"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: true,
    highlights: ["Mantenimiento al día", "Unico Dueño", "Paquete M Sport"],
  },
  {
    id: "2",
    slug: "2019-audi-a4",
    make: "Audi",
    model: "A4",
    year: 2019,
    price: 29700,
    mileage: 30000,
    condition: "Usado",
    bodyType: "Sedán",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Gris Monzón",
    interiorColor: "Negro",
    engineSize: "2.0L I4 Turbo",
    vin: "WAUZZF41234567890",
    features: ["Virtual Cockpit", "Apple CarPlay", "Luces Matrix LED"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: true,
    highlights: ["Bajo Kilometraje", "Service Oficial"],
  },
  {
    id: "3",
    slug: "2021-ford-mustang",
    make: "Ford",
    model: "Mustang",
    year: 2021,
    price: 42900,
    mileage: 15000,
    condition: "Usado",
    bodyType: "Coupé",
    transmission: "Manual",
    fuelType: "Gasolina",
    exteriorColor: "Rojo Race",
    interiorColor: "Cuero Negro",
    engineSize: "5.0L V8",
    vin: "1FA6P8XYZ12345678",
    features: ["Launch Control", "Escape Activo", "Sync 3", "Frenos Brembo"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: true,
    highlights: ["V8 Puro", "Caja Manual 6ta", "Impecable Estado"],
  },
  {
    id: "4",
    slug: "2018-toyota-corolla",
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    price: 15800,
    mileage: 60000,
    condition: "Usado",
    bodyType: "Sedán",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Blanco Perlado",
    interiorColor: "Tela Gris",
    engineSize: "1.8L I4",
    vin: "2T1BURHE123456789",
    features: ["Cámara de Retroceso", "Control Crucero", "Bluetooth"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: true,
    highlights: ["Confiabilidad Toyota", "Económico", "Ideal Primer Auto"],
  },
  {
    id: "5",
    slug: "2023-mercedes-benz-c300",
    make: "Mercedes-Benz",
    model: "C300",
    year: 2023,
    price: 55000,
    mileage: 5000,
    condition: "Certificado",
    bodyType: "Sedán",
    transmission: "Automática",
    fuelType: "Híbrido",
    exteriorColor: "Plata Iridio",
    interiorColor: "Negro",
    engineSize: "2.0L I4 Turbo + EQ",
    vin: "W1KZG8DB123456789",
    features: ["MBUX", "Iluminación Ambiental", "Distronic Plus"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: false,
    highlights: ["Casi Nuevo", "Garantía Extendida"],
  },
  {
    id: "6",
    slug: "2022-honda-crv",
    make: "Honda",
    model: "CR-V",
    year: 2022,
    price: 32000,
    mileage: 25000,
    condition: "Usado",
    bodyType: "SUV",
    transmission: "Automática",
    fuelType: "Gasolina",
    exteriorColor: "Azul Obsidiana",
    interiorColor: "Cuero Beige",
    engineSize: "1.5L Turbo",
    vin: "HKCRV202212345678",
    features: ["Honda Sensing", "Sunroof", "Baúl Eléctrico"],
    images: ["/placeholder.svg?height=600&width=900"],
    isFeatured: false,
    highlights: ["Espaciosa", "Segura", "Familiar"],
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
