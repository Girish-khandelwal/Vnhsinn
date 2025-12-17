"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  title: string
  text: string
  product: string
  verified: boolean
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Priya S.",
      rating: 5,
      title: "Amazing Quality and Fit!",
      text: "The kurta I ordered fits perfectly and the fabric is so comfortable. Exactly as shown in pictures. Will definitely order again!",
      product: "Pink Paisley Kurta",
      verified: true,
    },
    {
      id: 2,
      name: "Anjali M.",
      rating: 5,
      title: "Best Purchase Ever",
      text: "The salwar suit set is beautiful and authentic. The colors are vibrant and the embroidery work is excellent. Highly recommended!",
      product: "Floral Print Salwar Suit",
      verified: true,
    },
    {
      id: 3,
      name: "Neha K.",
      rating: 4,
      title: "Great Value for Money",
      text: "Got the entire set with kurta, pants and dupatta for this price - amazing deal. Quality is good and delivery was fast.",
      product: "Rayon Kurta Pant Set",
      verified: true,
    },
    {
      id: 4,
      name: "Meera V.",
      rating: 5,
      title: "Perfect for Festive Season",
      text: "Wore this at my sister's wedding and got so many compliments. The anarkali dress is stunning and very comfortable to wear all day.",
      product: "Yellow Anarkali Dress",
      verified: true,
    },
    {
      id: 5,
      name: "Deepika R.",
      rating: 5,
      title: "Comfortable and Stylish",
      text: "The winter socks are so warm and cozy. Perfect quality for this price. Got the whole pack and love all the colors!",
      product: "Winter Socks Pack",
      verified: true,
    },
    {
      id: 6,
      name: "Kavya P.",
      rating: 4,
      title: "Good Quality Briefs",
      text: "Pack of 6 in different colors. All are very comfortable. The fabric is breathable and durable. Great investment!",
      product: "Assorted Briefs Pack",
      verified: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Customer Reviews
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-2xl font-bold">{avgRating} out of 5</span>
          </div>
          <p className="text-muted-foreground mt-2">Based on {reviews.length} verified customer reviews</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-border hover:border-amber-500 transition bg-card"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  {review.verified && <p className="text-xs text-green-600 font-semibold">Verified Purchase</p>}
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              <p className="font-semibold text-foreground mb-2">{review.title}</p>
              <p className="text-muted-foreground mb-3">{review.text}</p>
              <p className="text-sm text-amber-600 font-semibold">Product: {review.product}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
