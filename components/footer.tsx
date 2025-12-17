"use client"

import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background mt-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, linear: true }}
          className="absolute top-20 left-20 w-40 h-40 border border-background rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">V</span>
              </div>
              <h3 className="text-lg font-bold">VNHSIN</h3>
            </div>
            <p className="text-sm opacity-80">
              Premium kurtis, kurtas, and comfort wear for the modern Indian wardrobe.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-amber-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#catalog" className="hover:text-amber-300 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-300 transition">
                  Reviews
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-amber-300">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-300 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-300 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-amber-300 transition">
                  Return Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-amber-300">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/919983704484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition"
              >
                <Phone size={16} />
                +91 9983704484
              </a>
              <a
                href="mailto:info.shantienterprisesjaipur@gmail.com"
                className="flex items-start gap-2 hover:text-amber-300 transition group"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="break-all">info.shantienterprisesjaipur@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">© 2025 VNHSIN. All rights reserved. Made with love for Indian fashion.</p>
            <motion.div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href="#"
                  className="p-2 hover:bg-background/10 rounded-lg transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
