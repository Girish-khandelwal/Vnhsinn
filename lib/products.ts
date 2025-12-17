export interface Product {
  id: string
  title: string
  price: number
  mrp: number
  currency: string
  images: string[]
  colorImages?: Record<string, string[]>
  colors: string[]
  sizes: string[]
  description: string
  rating: number
  reviews: number
  badge?: string
}

export const PRODUCTS: Product[] = [
  {
    id: "VN-1011",
    title: "Long Flared Kurta with Straight Pants for Women - Wedding Special",
    price: 499,
    mrp: 2499,
    currency: "INR",
    images: [
      "/images/screenshot-202025-12-17-20133514.png",
      "/images/screenshot-202025-12-17-20133454.png",
      "/images/screenshot-202025-12-17-20133504.png",
      "/images/screenshot-202025-12-17-20133528.png",
      "/images/screenshot-202025-12-17-20133534.png",
      "/images/screenshot-202025-12-17-20133551.png",
    ],
    colorImages: {
      Green: [
        "/images/screenshot-202025-12-17-20133514.png",
        "/images/screenshot-202025-12-17-20133454.png",
        "/images/screenshot-202025-12-17-20133504.png",
      ],
      Brown: [
        "/images/screenshot-202025-12-17-20133528.png",
        "/images/screenshot-202025-12-17-20133534.png",
        "/images/screenshot-202025-12-17-20133551.png",
      ],
    },
    colors: ["Green", "Brown"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Elegant long flared kurta with straight pants, specially designed for mehndi functions and wedding celebrations. Premium rayon fabric ensures comfort throughout the day. Features beautiful flared silhouette that adds grace to your movements. Perfect for casual office wear and festive occasions.",
    rating: 5.0,
    reviews: 3,
    badge: "Wedding Special",
  },
  {
    id: "VN-1012",
    title: "Rayon Plain Kurta Pant Set for Women and Girls",
    price: 499,
    mrp: 1999,
    currency: "INR",
    images: [
      "/images/screenshot-202025-12-17-20134033.png",
      "/images/screenshot-202025-12-17-20134039.png",
      "/images/screenshot-202025-12-17-20134052.png",
      "/images/screenshot-202025-12-17-20134046.png",
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    description:
      "Premium heavy quality rayon kurta pant set with traditional aesthetic and regular fit. Pull-on closure for easy wear. Full-length kurta provides an outstanding casual and formal look. Machine washable for convenient care. Perfect for any occasion including casual outings, formal events, parties, and weddings.",
    rating: 3.7,
    reviews: 23,
  },
  {
    id: "VN-1013",
    title: "Rayon Nyra Cut Kurta Pant and Dupatta Set",
    price: 899,
    mrp: 1999,
    currency: "INR",
    images: ["/images/image.png", "/images/image.png", "/images/image.png", "/images/image.png", "/images/image.png"],
    colors: ["Navy Blue"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "NARYA Cut Straight Kurta Set for Women's Wedding Wear. Elegant knee-length kurta with beautiful silver embroidered yoke and 3/4 sleeves. Features round neck and includes matching pant and dupatta. Perfect for weddings, festivals, cultural events, or casual outings. Easy to accessorize - pair with statement jewelry and heels for formal look or dress down with flats for casual ensemble. Premium rayon fabric with intricate embroidery work.",
    rating: 4.2,
    reviews: 14,
    badge: "Best Seller",
  },
  {
    id: "VN-1014",
    title: "Floral Print Cotton Salwar Suit Set - Pink and White Paisley Pattern",
    price: 649,
    mrp: 2499,
    currency: "INR",
    images: [
      "/images/pink-salwar-1.png",
      "/images/pink-salwar-2.png",
      "/images/pink-salwar-3.png",
      "/images/pink-salwar-4.png",
    ],
    colors: ["Pink"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Traditional ethnic salwar suit featuring elegant pink and white colour combination with intricate paisley and floral patterns throughout. Premium cotton material ensures breathability and comfort, perfect for both daily wear and special occasions. Complete three-piece ensemble includes a beautifully patterned kurta, matching salwar bottoms, and coordinating dupatta. Sleeveless kurta with a flattering fit, adorned with delicate print work and complemented by a gracefully draped dupatta. Suitable for festivals, celebrations, or casual outings, this ensemble combines traditional aesthetics with contemporary styling.",
    rating: 4.5,
    reviews: 18,
  },
  {
    id: "VN-1015",
    title: "Women Warm Soft Furry Winter Ankle Length Socks Pack of 4 pairs",
    price: 219,
    mrp: 399,
    currency: "INR",
    images: [
      "/images/winter-socks-1.png",
      "/images/winter-socks-2.png",
      "/images/winter-socks-3.png",
      "/images/winter-socks-4.png",
    ],
    colors: ["Multicolor"],
    sizes: ["Free Size"],
    description:
      "Cosy comfort ankle length thermal socks providing ultimate warmth for your feet during winter. These soft and furry leg warmers feature fleece lining for extra warmth. Versatile style that pairs perfectly with jeans, leggings, or dresses for a trendy and fashionable look. Snug fit with elastic band ensures secure placement while remaining adjustable. Machine washable for easy care and maintenance. One size fits most adult foot sizes comfortably. Pack includes 4 pairs in assorted colors.",
    rating: 3.5,
    reviews: 2,
  },
  {
    id: "VN-1016",
    title: "Multicolour Winter Snow Socks Pack of 5 Pairs - Assorted Colours",
    price: 249,
    mrp: 799,
    currency: "INR",
    images: ["/images/snow-socks-1.png", "/images/snow-socks-2.png", "/images/snow-socks-3.png"],
    colors: ["Multicolor"],
    sizes: ["Free Size"],
    description:
      "Enjoy ultimate comfort and warmth with these soft, plush velvet winter socks crafted from high-quality fabric. Available in a range of vibrant hues including burgundy, teal, blush pink, charcoal grey, and black to complement any outfit. Reinforced toe and heel areas ensure long-lasting wear and tear resistance. The lightweight, breathable velvet material keeps your feet fresh and dry throughout the day. These stretchy socks are designed to fit most adult foot sizes comfortably. Pack includes 5 pairs of cosy winter socks in assorted colours. Machine washable for easy care.",
    rating: 4.0,
    reviews: 8,
  },
  {
    id: "VN-1017",
    title: "Women's Sports Padded Bra - Assorted Colours, Adjustable Straps, Set of 3",
    price: 449,
    mrp: 897,
    currency: "INR",
    images: [
      "/images/sports-bra-1.png",
      "/images/sports-bra-2.png",
      "/images/sports-bra-3.png",
      "/images/sports-bra-4.png",
    ],
    colors: ["Black", "White", "Grey", "Olive Green", "Mustard Yellow", "Dusty Rose"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Versatile sports padded bras come in a variety of muted, earthy tones like black, white, grey, olive green, mustard yellow, and dusty rose - perfect for layering under sheer tops or wearing alone. Crafted from lightweight, stretchy microfiber material for comfortable and airy fit for all-day wear. The adjustable spaghetti straps allow you to customise the fit for your desired level of support and coverage. With their sleek, minimalist design, these camisoles can seamlessly transition from casual day looks to dressier evening ensembles. Layer them under sheer blouses, cardigans, or jackets for a chic and trendy look, or wear them alone for a fuss-free yet polished outfit. Hand wash only for best care. Set of 3 pieces.",
    rating: 4.3,
    reviews: 12,
  },
  {
    id: "VN-1018",
    title: "Women's Pink Paisley Print Cotton Kurta with 3/4 Sleeves - Knee Length",
    price: 499,
    mrp: 1499,
    currency: "INR",
    images: [
      "/images/paisley-kurta-1.png",
      "/images/paisley-kurta-2.png",
      "/images/paisley-kurta-3.png",
      "/images/paisley-kurta-4.png",
    ],
    colors: ["Pink"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Beautiful paisley print rayon kurta featuring vibrant pink base with intricate multicoloured patterns throughout the garment. Classic knee-length silhouette with front button placket and comfortable 3/4 sleeves for versatile wear. Premium rayon fabric ensures breathability and comfort, perfect for daily wear in Indian weather. Features a round neck, side slits for ease of movement, and practical side pockets. Can be paired with trousers, leggings, or palazzo pants for various occasions from casual to semi-formal wear. The intricate paisley embroidery work showcases traditional craftsmanship with vibrant colors including turquoise, orange, purple, and yellow accents on the pink base.",
    rating: 4.6,
    reviews: 7,
  },
  {
    id: "VN-1019",
    title: "Women's Red Cotton Kurta Set with Pants - V-Neck Long Sleeve Empire Waist",
    price: 599,
    mrp: 2499,
    currency: "INR",
    images: [
      "/images/red-kurta-set-1.png",
      "/images/red-kurta-set-2.png",
      "/images/red-kurta-set-3.png",
      "/images/red-kurta-set-4.png",
    ],
    colors: ["Red"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Elegant V-neckline kurta set with button detailing and gathered empire waist silhouette that flows into a graceful A-line maxi length for a sophisticated ethnic look. This traditional outfit includes a matching long kurta top paired with coordinating trousers, creating a well-coordinated ensemble perfect for casual and festive occasions. Crafted from soft, breathable rayon material in a rich red colour that offers all-day comfort and easy movement while maintaining its vibrant appearance. Long sleeves and modest length make this kurta set suitable for various occasions including daily wear, casual outings, festivals, and cultural celebrations. The empire waist design with gathered pleats creates a relaxed, flowing fit that flatters various body types whilst providing comfortable ease of movement. Machine washable for easy care.",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: "VN-1020",
    title: "Designer Yellow Floral Print Anarkali Dress - Full Length Traditional Indian Style",
    price: 799,
    mrp: 2199,
    currency: "INR",
    images: [
      "/images/yellow-anarkali-1.png",
      "/images/yellow-anarkali-2.png",
      "/images/yellow-anarkali-3.png",
      "/images/yellow-anarkali-4.png",
    ],
    colors: ["Yellow"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Stunning yellow Anarkali dress featuring an intricate floral print pattern and traditional Indian styling with full-length cut. Premium rayon blend material ensures comfort and breathability while maintaining the dress's elegant drape and flow. Beautiful floor-length Anarkali silhouette with coordinating dupatta and stylish cold-shoulder sleeve design. Perfect for festive occasions, casual outings, or social gatherings, pairs well with both traditional and modern accessories. Features a V-neckline with decorative embroidered trim, flared bottom panel, and delicate floral print in multiple colours including pink, red, green, and blue on a vibrant yellow base. Complete three-piece set includes dupatta, kurta, and pant. The ornate border detailing on the dupatta and kurta adds an extra touch of elegance to this versatile ethnic ensemble.",
    rating: 4.8,
    reviews: 11,
    badge: "Designer",
  },
  {
    id: "VN-1021",
    title: "Women's Briefs in Assorted Colours - 100% Cotton, Pack of 6",
    price: 140,
    mrp: 999,
    currency: "INR",
    images: ["/images/image.png"],
    colors: ["Black", "Brown", "Navy Blue", "Teal Blue", "Olive Green", "Purple"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Variety pack of six pairs of women's briefs in a range of vibrant colours including black, brown, navy blue, teal blue, olive green, and purple. Crafted from lightweight, moisture-wicking cotton-spandex blend fabric for all-day comfort and freshness. Features an elasticated waistband that provides a snug, secure fit without digging or chafing. Designed with a classic brief cut that offers ample full coverage and support. Soft and breathable material keeps you comfortable throughout the day. Mid-rise style with hand wash only care instructions. Stock up on your everyday essentials with this convenient multipack of six briefs at an affordable price. Perfect for daily wear with superior comfort and quality.",
    rating: 4.4,
    reviews: 25,
    badge: "Value Pack",
  },
  {
    id: "VN-1022",
    title: "Women's Black Kurta Pant Set with Beautiful Neck Hand Embroidery Work",
    price: 699,
    mrp: 1999,
    currency: "INR",
    images: [
      "/images/black-kurta-handwork-1.png",
      "/images/black-kurta-handwork-2.png",
      "/images/black-kurta-handwork-3.png",
    ],
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Elegant black kurta pant set featuring exquisite hand embroidery work around the V-neckline with intricate floral and mirror work detailing. Crafted from premium heavy rayon fabric that provides both comfort and durability for all-day wear. The kurta showcases beautiful white embroidered geometric wave patterns throughout, creating a stunning contrast against the black base. Features 3/4 sleeves and a flattering V-neck with detailed hand embroidery work. Complete three-piece ensemble includes a beautifully embroidered kurta, matching pant with coordinating embroidery, and dupatta. Perfect for festive occasions, cultural celebrations, or semi-formal events. The regular fit design with pull-on closure ensures easy wear and comfort. Machine washable for convenient care.",
    rating: 4.9,
    reviews: 8,
    badge: "Hand Embroidered",
  },
  {
    id: "VN-1023",
    title: "Women's Paisley Print Kurta Pant Set - Brown and Black, 3/4 Sleeve",
    price: 699,
    mrp: 1999,
    currency: "INR",
    images: ["/images/paisley-brown-kurta.png"],
    colors: ["Brown"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description:
      "Elegant paisley print kurta pant set featuring intricate traditional patterns in brown and black tones for a sophisticated look. Three-quarter length sleeves provide comfort and style, perfect for various occasions and weather conditions. Crafted from comfortable and breathable cotton blend material that ensures ease of movement while maintaining a graceful silhouette. Complete coordinated outfit includes a matching kurta and straight-cut pants in complementary paisley print. Ideal for casual wear, festive occasions, or daily office wear, easily dressed up or down with accessories. Features V-neckline and contemporary Indian styling with traditional paisley motifs throughout. Gentle machine wash cold, do not bleach, line dry in shade, warm iron if needed.",
    rating: 4.5,
    reviews: 6,
  },
]

export const WHATSAPP_PHONE = "919983704484"
export const BRAND_EMAIL = "info.shantienterprisesjaipur@gmail.com"
