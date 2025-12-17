"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">We'd love to hear from you. Reach out anytime!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0"
              >
                <Phone className="text-white" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <a
                  href="tel:+919983704484"
                  className="text-muted-foreground hover:text-amber-500 transition-colors cursor-pointer"
                >
                  +91 9983704484
                </a>
                <p className="text-sm text-muted-foreground">Available on WhatsApp</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0"
              >
                <Mail className="text-white" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a
                  href="mailto:info.shantienterprisesjaipur@gmail.com"
                  className="text-muted-foreground hover:text-amber-500 transition-colors cursor-pointer break-all"
                >
                  info.shantienterprisesjaipur@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0"
              >
                <MapPin className="text-white" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">India</p>
                <p className="text-sm text-muted-foreground">Shipping across India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-amber-500 focus:outline-none bg-background"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-amber-500 focus:outline-none bg-background"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-amber-500 focus:outline-none bg-background resize-none"
                rows={5}
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <Send size={20} />
              Send Message
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
