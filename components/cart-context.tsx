"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { CartItem } from "@/lib/cart-utils"

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clearCart: () => void
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("vnhsin_cart")
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch {
        setItems([])
      }
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("vnhsin_cart", JSON.stringify(items))
    }
  }, [items, loaded])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size,
      )
      if (existing) {
        return prev.map((item) => (item === existing ? { ...item, qty: item.qty + newItem.qty } : item))
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
