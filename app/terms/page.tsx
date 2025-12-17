"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { WHATSAPP_PHONE } from "@/lib/cart-utils"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. General Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to VNHSIN. By accessing and placing an order with VNHSIN, you confirm that you are in agreement
                with and bound by the terms and conditions contained in the Terms & Conditions outlined below. These
                terms apply to the entire website and any email or other type of communication between you and VNHSIN.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Products & Pricing</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  All products are subject to availability. We reserve the right to limit the quantities of any products
                  that we offer. Prices are subject to change without notice.
                </p>
                <p>
                  Product images are for illustrative purposes only. Actual colors may vary slightly due to screen
                  display settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Orders & Payment</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Orders are processed through WhatsApp. Payment is collected upon checkout via our WhatsApp business
                  account.
                </p>
                <p>
                  We accept UPI, bank transfer, and other digital payment methods. Payment details will be shared via
                  WhatsApp after order confirmation.
                </p>
                <p>Order confirmation will be sent via WhatsApp once payment is received.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Shipping & Delivery</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We offer shipping across India. Delivery times vary based on location.</p>
                <p>Standard delivery: 5-7 business days</p>
                <p>Express delivery: 2-3 business days (additional charges apply)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Contact Us</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  For any questions or queries regarding these terms and conditions, please contact us via WhatsApp:
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                </motion.a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
