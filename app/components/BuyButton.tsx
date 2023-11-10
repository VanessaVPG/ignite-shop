'use client'
import Stripe from "stripe"
import { handleBuyProduct } from "../lib/actions"

export default function BuyButton(price: { price: Stripe.Price }) {
  const { id } = price.price


  return (
    <button onClick={() => handleBuyProduct(id)} className="rounded-lg mt-auto bg-green-500 border-0 text-white p-5 cursor-pointer font-bold text-md transition-all hover:bg-green-300">
      Comprar agora
    </button>
  )
}