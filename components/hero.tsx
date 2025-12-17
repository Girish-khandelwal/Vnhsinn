"use client"

import { motion } from "framer-motion"
import { ChevronDown, ShoppingBag, Sparkles, Zap, Star, TrendingUp, Shield } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50/30 to-background overflow-hidden px-4 py-20">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-300 to-amber-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 border-4 border-amber-300 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-48 h-48 border-4 border-orange-300 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 shadow-lg"
            >
              <Sparkles size={20} className="text-amber-600" />
              <span className="text-base font-bold text-amber-800">Premium Collection 2025</span>
              <Star size={16} className="text-amber-600 fill-amber-600" />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  textShadow: "2px 2px 4px rgba(251, 191, 36, 0.3)",
                  letterSpacing: "0.05em",
                }}
              >
                VNHSIN
              </motion.h2>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-2xl md:text-4xl text-transparent bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text font-bold"
            >
              Fresh • Comfortable • Premium
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed px-4"
          >
            Discover our handpicked collection of traditional kurtis, contemporary kurtas, and everyday comfort wear.
            Crafted with love for your wardrobe.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
            <motion.a
              whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              href="#catalog"
              className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <ShoppingBag size={24} />
              <span className="relative z-10">Shop Collection</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="px-10 py-5 rounded-2xl border-3 border-amber-600 text-amber-700 font-bold text-lg hover:bg-amber-50 transition-all flex items-center gap-3 backdrop-blur-sm"
            >
              <Zap size={24} />
              Our Story
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, title: "Trending Designs", desc: "Latest fashion curated for you" },
              { icon: Shield, title: "Premium Quality", desc: "100% quality guaranteed" },
              { icon: ShoppingBag, title: "Fast Delivery", desc: "Quick shipping across India" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                animate={floatingAnimation}
                transition={{ delay: idx * 0.2 }}
                className="group p-6 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-amber-200 hover:border-amber-400 transition-all shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 mb-3"
                >
                  <item.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Scroll Down</span>
          <ChevronDown size={32} className="text-amber-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
