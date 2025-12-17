"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "./cart-context"
import { buildWhatsAppMessage, generateOrderId, openWhatsAppCheckout, WHATSAPP_PHONE } from "@/lib/cart-utils"
import { X, Copy, Check } from "lucide-react"

interface CheckoutModalProps {
  onClose: () => void
  cartTotal: number
}

export default function CheckoutModal({ onClose, cartTotal }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCart()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCheckout = () => {
    const orderId = generateOrderId()
    const whatsappMsg = buildWhatsAppMessage(items, orderId, {
      name: name || "Guest",
      phone,
      address,
    })

    setMessage(whatsappMsg)
    openWhatsAppCheckout(whatsappMsg, WHATSAPP_PHONE)
    setSubmitted(true)
    setTimeout(() => {
      clearCart()
      onClose()
    }, 2000)
  }

  const handleCopyMessage = () => {
    if (message) {
      navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

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
          className="bg-background rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
                <X size={24} />
              </button>
            </div>

            {!submitted ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name (Optional)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10 digit phone number"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Delivery Address (Optional)</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                  <p className="font-semibold text-amber-900 mb-1">Order Summary</p>
                  <p className="text-amber-800">
                    Items: {items.length} | Subtotal: ₹{subtotal}
                  </p>
                  <p className="font-bold text-amber-900 mt-2">Total: ₹{cartTotal}</p>
                </div>

                <p className="text-xs text-muted-foreground">
                  Clicking checkout will open WhatsApp with your order details. Complete payment through WhatsApp with
                  our team.
                </p>

                <motion.button
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Continue to WhatsApp
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="font-bold text-green-900 mb-2">Order Placed!</p>
                  <p className="text-green-800 text-sm">
                    WhatsApp has opened with your order details. Please complete the payment through WhatsApp with our
                    team.
                  </p>
                </div>

                {message && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Message</label>
                    <div className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap break-words">{message}</div>
                    <button
                      onClick={handleCopyMessage}
                      className="w-full mt-2 py-2 rounded-lg border border-border hover:bg-muted transition flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check size={16} /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={16} /> Copy Message
                        </>
                      )}
                    </button>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="w-full py-2 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
