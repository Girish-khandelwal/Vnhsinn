"use client"

import { motion } from "framer-motion"
import { useCart } from "@/components/cart-context"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react"
import { useState } from "react"
import CheckoutModal from "@/components/checkout-modal"

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart()
  const [isCheckout, setIsCheckout] = useState(false)

  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3"
        >
          <Link
            href="/"
            className="p-2 hover:bg-muted rounded-lg transition flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Shopping Bag
          </h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mb-6 flex justify-center"
            >
              <ShoppingBag size={64} className="text-muted-foreground opacity-50" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Start shopping to add items to your bag</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {items.map((cartItem) => (
                  <motion.div
                    key={cartItem.id}
                    variants={item}
                    className="bg-background rounded-xl border border-border p-4 sm:p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex gap-4">
                      <motion.img
                        src={cartItem.image || "/placeholder.svg"}
                        alt={cartItem.title}
                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg bg-muted"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg line-clamp-2 mb-2">{cartItem.title}</h3>
                        {cartItem.color && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Color:</span> {cartItem.color}
                          </p>
                        )}
                        {cartItem.size && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Size:</span> {cartItem.size}
                          </p>
                        )}
                        <div className="flex items-end justify-between mt-4">
                          <div className="flex items-center gap-2 border border-border rounded-lg w-fit">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQty(cartItem.id, cartItem.qty - 1)}
                              className="p-2 hover:bg-muted"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="px-4 font-semibold min-w-12 text-center">{cartItem.qty}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQty(cartItem.id, cartItem.qty + 1)}
                              className="p-2 hover:bg-muted"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(cartItem.id)}
                            className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground line-through">₹{cartItem.price}</p>
                        <p className="text-2xl font-bold text-amber-600">₹{cartItem.price * cartItem.qty}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="bg-background rounded-xl border border-border p-6 sticky top-24 space-y-4">
                <h2 className="text-xl font-bold">Order Summary</h2>

                <div className="space-y-3 text-sm border-t border-b border-border py-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? "text-green-600" : ""}`}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-green-600 font-semibold">✓ Free shipping on orders above ₹500</p>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-amber-600">₹{total}</span>
                </div>

                <motion.button
                  onClick={() => setIsCheckout(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold hover:shadow-lg transition-all"
                >
                  Proceed to Checkout
                </motion.button>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/"
                    className="block w-full py-3 rounded-lg border-2 border-amber-500 text-amber-600 font-semibold text-center hover:bg-amber-50 transition-all"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {isCheckout && <CheckoutModal onClose={() => setIsCheckout(false)} cartTotal={total} />}
    </div>
  )
}
