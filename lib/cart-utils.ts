export interface CartItem {
  id: string
  title: string
  price: number
  qty: number
  color?: string
  size?: string
  image: string
}

export const WHATSAPP_PHONE = "919983704484"
export const BRAND_EMAIL = "info.shantienterprisesjaipur@gmail.com"

export function generateOrderId(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  const h = String(d.getHours()).padStart(2, "0")
  const min = String(d.getMinutes()).padStart(2, "0")
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `VNHSIN-${y}${m}${day}-${h}${min}-${rand}`
}

export function buildWhatsAppMessage(
  cart: CartItem[],
  orderId: string,
  customer: { name?: string; phone?: string; address?: string } = {},
): string {
  const lines = ["🛍️ *New Order from VNHSIN* 🛍️", "", `📋 *Order ID:* ${orderId}`, ""]

  if (customer.name) lines.push(`👤 *Customer:* ${customer.name}`)
  if (customer.phone) lines.push(`📞 *Phone:* ${customer.phone}`)
  if (customer.address) lines.push(`📍 *Address:* ${customer.address}`)

  lines.push("")
  lines.push("─".repeat(30))
  lines.push("*ORDERED ITEMS:*")
  lines.push("")

  let subtotal = 0
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty
    subtotal += itemTotal

    lines.push(`*${idx + 1}. ${item.title}*`)
    if (item.color) lines.push(`   • Color: ${item.color}`)
    if (item.size) lines.push(`   • Size: ${item.size}`)
    lines.push(`   • Quantity: ${item.qty}`)
    lines.push(`   • Price: ₹${item.price} × ${item.qty} = *₹${itemTotal}*`)
    lines.push("")
  })

  const shipping = 0
  const total = subtotal + shipping

  lines.push("─".repeat(30))
  lines.push("*PAYMENT SUMMARY:*")
  lines.push(`Subtotal: ₹${subtotal}`)
  lines.push(`Shipping: ₹${shipping}`)
  lines.push(`*Total Amount: ₹${total}*`)
  lines.push("─".repeat(30))
  lines.push("")
  lines.push("✅ Please confirm this order and share payment details.")
  lines.push("🙏 Thank you for shopping with VNHSIN!")

  return lines.join("\n")
}

export function openWhatsAppCheckout(message: string, phone = WHATSAPP_PHONE): void {
  const encoded = encodeURIComponent(message)
  const url = `https://wa.me/${phone}?text=${encoded}`
  window.open(url, "_blank")
}

export type { CartItem }
