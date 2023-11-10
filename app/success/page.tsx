import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { searchParamsProps } from "../lib/definitions";
import { Suspense } from "react";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export default async function Success({ searchParams }: { searchParams: searchParamsProps }) {
  if(!searchParams.session_id){
    redirect('/')
  }
  const sessionId = String(searchParams?.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price
    ?.product as Stripe.Product
  
  return (
    <main className="flex flex-col items-center justify-center max-w-[1180px] w-full my-0 mx-auto h-[656px]">
      <h1 className="font-bold text-2xl leading-[140%] text-gray-100">Compra efetuada!</h1>
      <div className="w-32 h-36 bg-gradient rounded-lg p-1 flex items-center justify-center mt-16">
        <Suspense fallback={'carregando'}>
          <Image src={product.images[0]} alt="" width={115} height={106.42}></Image>

        </Suspense>
      </div>
      <p className="text-xl text-gray-300 max-w-[560px] text-center mt-8">Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.</p>
      <Link href="/" className="mt-[88px] transition-all text-green-500 font-bold text-lg hover:text-green-300">
        Voltar ao catálogo
      </Link>
    </main>
  )
}