"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PRODUCTS } from "@/lib/products"
import ProductCard from "./product-card"
import ProductModal from "./product-modal"
import type { Product } from "@/lib/products"
import { Filter } from "lucide-react"

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [sortBy, setSortBy] = useState("featured")
  const [priceFilter, setPriceFilter] = useState("all")

  let filteredProducts = [...PRODUCTS]

  if (priceFilter !== "all") {
    if (priceFilter === "low") {
      filteredProducts = filteredProducts.filter((p) => p.price < 500)
    } else if (priceFilter === "mid") {
      filteredProducts = filteredProducts.filter((p) => p.price >= 500 && p.price < 800)
    } else if (priceFilter === "high") {
      filteredProducts = filteredProducts.filter((p) => p.price >= 800)
    }
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="catalog" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
          Our Collection
        </h2>
        <p className="text-lg text-muted-foreground">Handpicked kurtis, kurtas, and comfort wear for every occasion</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-4 flex-wrap items-center mb-8 pb-6 border-b border-border"
      >
        <Filter size={20} className="text-muted-foreground" />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:border-amber-500 transition cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:border-amber-500 transition cursor-pointer"
        >
          <option value="all">All Prices</option>
          <option value="low">Under ₹500</option>
          <option value="mid">₹500 - ₹800</option>
          <option value="high">Above ₹800</option>
        </select>

        <div className="ml-auto text-sm text-muted-foreground">{sortedProducts.length} products</div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {sortedProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} onQuickView={() => setSelectedProduct(product)} />
          </motion.div>
        ))}
      </motion.div>

      {sortedProducts.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
          <p className="text-lg text-muted-foreground">No products found in this price range</p>
        </motion.div>
      )}

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </section>
  )
}
