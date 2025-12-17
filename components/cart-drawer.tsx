"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "./cart-context"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { useState } from "react"
import CheckoutModal from "./checkout-modal"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQty, subtotal } = useCart()
  const [isCheckout, setIsCheckout] = useState(false)

  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-40 flex flex-col overflow-auto"
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground mb-2">Your cart is empty</p>
                  <button onClick={onClose} className="text-amber-600 hover:text-amber-700 font-semibold">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-3 p-3 rounded-lg border border-border hover:bg-muted transition"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
                        {item.color && <p className="text-xs text-muted-foreground">{item.color}</p>}
                        {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                        <p className="font-bold text-amber-600 mt-1">₹{item.price * item.qty}</p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="p-1 hover:bg-background rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="p-1 hover:bg-background rounded"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1 hover:bg-red-50 hover:text-red-600 rounded transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="text-lg font-bold text-amber-600">₹{total}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => setIsCheckout(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>

          {isCheckout && <CheckoutModal onClose={() => setIsCheckout(false)} cartTotal={total} />}
        </>
      )}
    </AnimatePresence>
  )
}
