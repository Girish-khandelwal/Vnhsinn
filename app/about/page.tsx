"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Heart, Users, Zap } from "lucide-react"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            About VNHSIN
          </h1>
          <p className="text-xl text-muted-foreground">Premium Ethnic Wear for Modern India</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border hover:border-amber-500 transition"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4"
            >
              <Heart className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Quality First</h3>
            <p className="text-muted-foreground">
              We believe in offering only the finest quality ethnic wear crafted with premium materials and meticulous
              attention to detail.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border hover:border-amber-500 transition"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4"
            >
              <Users className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Customer Focused</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our priority. We provide excellent customer service and ensure every purchase exceeds
              your expectations.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border hover:border-amber-500 transition"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4"
            >
              <Zap className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Quick and reliable delivery service. We ensure your orders reach you promptly in perfect condition.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            VNHSIN was founded with a simple mission: to bring premium, affordable ethnic wear to every Indian home. We
            celebrate the rich heritage of Indian fashion while embracing modern comfort and style.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each piece in our collection is carefully selected and crafted to ensure you feel confident, comfortable,
            and beautiful. From traditional kurtis to modern thermal wear, we have something special for everyone.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
