"use client"

import { motion } from "framer-motion"
import type { Product } from "@/lib/products"
import { Star } from "lucide-react"

interface ProductCardProps {
  product: Product
  onQuickView: () => void
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border flex flex-col"
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <motion.img
          src={product.images[0]}
          alt={product.title}
          whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star size={16} className="fill-amber-500 text-amber-500" />
          <span className="text-sm font-semibold">{product.rating}</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{product.title}</h3>

        <div className="flex gap-2 mb-3 flex-wrap">
          {product.colors.slice(0, 3).map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border-2 border-border text-xs flex items-center justify-center"
              title={color}
              style={{
                backgroundColor:
                  color.toLowerCase() === "black"
                    ? "#000"
                    : color.toLowerCase() === "white"
                      ? "#fff"
                      : color.toLowerCase() === "navy"
                        ? "#001f3f"
                        : color.toLowerCase() === "blue"
                          ? "#0074d9"
                          : color.toLowerCase() === "red"
                            ? "#ff4136"
                            : color.toLowerCase() === "green"
                              ? "#2ecc40"
                              : color.toLowerCase() === "pink"
                                ? "#f012be"
                                : color.toLowerCase() === "purple"
                                  ? "#b10dc9"
                                  : color.toLowerCase() === "orange"
                                    ? "#ff851b"
                                    : color.toLowerCase() === "brown"
                                      ? "#8b4513"
                                      : color.toLowerCase() === "grey" || color.toLowerCase() === "gray"
                                        ? "#aaa"
                                        : color.toLowerCase() === "maroon"
                                          ? "#800000"
                                          : color.toLowerCase() === "cream"
                                            ? "#fffdd0"
                                            : "#ddd",
              }}
            />
          ))}
          {product.colors.length > 3 && (
            <div className="w-6 h-6 rounded-full border-2 border-border text-xs flex items-center justify-center bg-muted text-muted-foreground font-semibold">
              +{product.colors.length - 3}
            </div>
          )}
        </div>

        <p className="text-2xl font-bold text-foreground mb-1">₹{product.price}</p>
        <p className="text-xs text-muted-foreground mb-4">{product.reviews} reviews</p>

        <button
          onClick={onQuickView}
          className="mt-auto w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Quick View
        </button>
      </div>
    </motion.div>
  )
}
