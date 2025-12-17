import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VNHSIN - Premium Ethnic Wear | Kurtis, Kurtas & Comfort",
  description:
    "Discover premium kurtis, kurtas, and comfort wear from VNHSIN. Fresh, comfortable, and stylish ethnic fashion for the modern Indian wardrobe. Shop now with fast delivery!",
  keywords: "kurtis, kurtas, ethnic wear, Indian fashion, salwar suits, women's kurtas, comfort wear, VNHSIN",
  openGraph: {
    title: "VNHSIN - Premium Ethnic Wear",
    description: "Discover our curated collection of premium kurtis and comfort wear",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
