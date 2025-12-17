"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Product } from "@/lib/products"
import { useCart } from "./cart-context"
import { useState } from "react"
import { X, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart()
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [showContinue, setShowContinue] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const displayImages = product.colorImages?.[selectedColor] || product.images
  const currentImage = displayImages[currentImageIndex]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: quantity,
      color: selectedColor,
      size: selectedSize,
      image: currentImage,
    })
    setShowContinue(true)
  }

  const handleViewCart = () => {
    onClose()
    router.push("/cart")
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        >
          {!showContinue ? (
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold flex-1">{product.title}</h2>
                <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className="relative group">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={currentImage}
                      alt={`${product.title} - ${selectedColor}`}
                      className="w-full h-96 object-cover rounded-lg bg-muted"
                    />
                    {product.badge && (
                      <motion.div
                        initial={{ rotate: -3 }}
                        animate={{ rotate: 3 }}
                        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                      >
                        {product.badge}
                      </motion.div>
                    )}

                    {displayImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                          <ChevronRight size={24} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {displayImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition ${
                                idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {displayImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {displayImages.map((img, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          whileHover={{ scale: 1.05 }}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                            idx === currentImageIndex ? "border-amber-500" : "border-border"
                          }`}
                        >
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`View ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <div className="text-3xl font-bold text-foreground">₹{product.price}</div>
                      <div className="text-lg text-muted-foreground line-through">₹{product.mrp}</div>
                      <div className="text-lg font-bold text-green-600">{discount}% off</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < Math.floor(product.rating) ? "text-amber-500" : "text-muted-foreground"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold mb-2">Color</label>
                      <div className="flex gap-3 flex-wrap">
                        {product.colors.map((color) => (
                          <motion.button
                            key={color}
                            onClick={() => handleColorChange(color)}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 rounded-lg border-2 transition ${
                              selectedColor === color
                                ? "border-amber-500 bg-amber-50"
                                : "border-border hover:border-amber-500"
                            }`}
                          >
                            {color}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold mb-2">Size</label>
                      <div className="flex gap-3 flex-wrap">
                        {product.sizes.map((size) => (
                          <motion.button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 rounded-lg border-2 transition ${
                              selectedSize === size
                                ? "border-amber-500 bg-amber-50"
                                : "border-border hover:border-amber-500"
                            }`}
                          >
                            {size}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold mb-2">Quantity</label>
                      <div className="flex items-center gap-3 border border-border rounded-lg w-fit">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 hover:bg-muted"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 font-semibold">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-muted">
                          +
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </motion.button>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center"
              >
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.5 }} className="text-3xl">
                  ✓
                </motion.span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Added to Cart!</h3>
              <p className="text-muted-foreground mb-6">
                {product.title} has been added to your cart with {quantity} {quantity > 1 ? "units" : "unit"}
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowContinue(false)}
                  className="flex-1 py-3 rounded-lg border-2 border-amber-500 text-amber-600 font-semibold hover:bg-amber-50 transition"
                >
                  Continue Shopping
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewCart}
                  className="flex-1 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold"
                >
                  View Cart
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
