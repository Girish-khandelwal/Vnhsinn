"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Shield, Lock, Eye, Database } from "lucide-react"
import { WHATSAPP_PHONE, BRAND_EMAIL } from "@/lib/cart-utils"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Shield, title: "Secure" },
              { icon: Lock, title: "Protected" },
              { icon: Eye, title: "Transparent" },
              { icon: Database, title: "Minimal Data" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl border-2 border-amber-200 bg-amber-50/50 text-center"
              >
                <item.icon className="text-amber-600 mx-auto mb-2" size={28} />
                <p className="font-semibold text-sm text-foreground">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At VNHSIN, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, and safeguard your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, phone number, email address, and delivery address
                    provided during checkout
                  </li>
                  <li>
                    <strong>Order Information:</strong> Products purchased, order history, and payment information
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Browser type, device information, and pages visited on our website
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Messages exchanged via WhatsApp for order processing and
                    customer support
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We use your information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processing and fulfilling your orders</li>
                  <li>Communicating with you about your orders via WhatsApp</li>
                  <li>Providing customer support and responding to inquiries</li>
                  <li>Improving our products and services</li>
                  <li>Sending promotional offers (only with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Storage & Security</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Your data is stored securely in your browser's local storage and is only shared with us when you place
                  an order via WhatsApp.
                </p>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
                <p>Payment information is processed securely through trusted payment gateways.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Sharing Your Information</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We do not sell or rent your personal information to third parties.</p>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery partners for order fulfillment</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies & Tracking</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We use browser local storage to remember your cart items and preferences. We do not use cookies for
                  tracking or advertising purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Links</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our website may contain links to third-party websites (like WhatsApp). We are not responsible for the
                  privacy practices of these external sites.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be posted on this page
                  with a revised "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  For questions about this Privacy Policy or your data:
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${WHATSAPP_PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </motion.a>
                  <a
                    href={`mailto:${BRAND_EMAIL}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
