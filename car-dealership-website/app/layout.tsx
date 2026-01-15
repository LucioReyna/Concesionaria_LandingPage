export const runtime = 'edge';
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: {
    default: "AutoElite | Curaduría Automotriz de Lujo",
    template: "%s | AutoElite",
  },
  description:
    "Descubra la colección definitiva de vehículos de alto rendimiento y lujo en AutoElite. Rendimiento inigualable y servicios de conserjería personalizados.",
  keywords: ["autos de lujo", "concesionaria premium", "vehículos exóticos", "conserjería automotriz", "AutoElite"],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-foreground bg-background" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
