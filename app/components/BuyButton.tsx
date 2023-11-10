'use client'
import Stripe from "stripe"
import { handleBuyProduct } from "../lib/actions"
import { useState } from "react"

export default function BuyButton(price: { price: Stripe.Price }) {
  const { id } = price.price
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleClick() {
    setIsCreatingCheckoutSession(true)
    await handleBuyProduct(id)
    setIsCreatingCheckoutSession(false)
  }



  return (
    <button onClick={handleClick} disabled={isCreatingCheckoutSession} className="rounded-lg mt-auto bg-green-500 border-0 text-white p-5 cursor-pointer font-bold text-md transition-all hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60">
      Comprar agora
    </button>
  )
}