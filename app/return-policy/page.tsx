"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Package, RefreshCw, Shield } from "lucide-react"
import { WHATSAPP_PHONE } from "@/lib/cart-utils"

export default function ReturnPolicyPage() {
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
            Return & Exchange Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: RefreshCw, title: "14-Day Returns", desc: "Easy returns within 14 days" },
              { icon: Shield, title: "Quality Checked", desc: "All products are verified" },
              { icon: Package, title: "Free Pickup", desc: "We arrange return pickup" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl border-2 border-amber-200 bg-amber-50/50"
              >
                <item.icon className="text-amber-600 mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">14-Day Return Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At VNHSIN, we want you to be completely satisfied with your purchase. If you're not happy with your
                order, you can return or exchange it within <strong>14 days</strong> of delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Eligibility for Returns</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>To be eligible for a return or exchange, your item must be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unused and in the same condition that you received it</li>
                  <li>In the original packaging with all tags attached</li>
                  <li>Accompanied by the original invoice/receipt</li>
                  <li>Returned within 14 days of delivery</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Non-Returnable Items</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>The following items cannot be returned or exchanged:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Innerwear, lingerie, and socks (for hygiene reasons)</li>
                  <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                  <li>Products damaged due to misuse or negligence</li>
                  <li>Items without original tags or packaging</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How to Initiate a Return</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>To start a return or exchange:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact us via WhatsApp within 14 days of receiving your order</li>
                  <li>Provide your order ID and reason for return</li>
                  <li>Share photos of the product if there's a quality issue</li>
                  <li>We'll arrange a free pickup from your location</li>
                  <li>Once we receive and inspect the item, we'll process your refund or exchange</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Refund Process</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Refunds are processed within 5-7 business days after we receive and verify the returned product.</p>
                <p>Refunds will be credited to your original payment method or bank account.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Exchange Policy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We offer free exchanges for size or color changes, subject to availability. The exchange product will
                  be shipped once we receive the original item.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us for Returns</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  For any return or exchange queries, contact us via WhatsApp:
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi, I would like to initiate a return/exchange for my order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <MessageCircle size={20} />
                  Start Return on WhatsApp
                </motion.a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
