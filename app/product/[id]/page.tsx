
import BuyButton from "@/app/components/BuyButton";
import { stripe } from "@/app/lib/stripe";
import Image from "next/image";
import Stripe from "stripe";


export default async function Page({ params }: { params: { id: string } }) {

  const product = await stripe.products.retrieve(params.id, {
    expand: ['default_price'],
  });
  const price = product.default_price as Stripe.Price;

  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] w-full my-0 mx-auto">
      <div className="w-full flex justify-center items-center max-w-xl h-[656px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg">
        {<Image src={product.images[0]} width={480} height={100} alt="imagem"></Image>}
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl leading-[140%] font-bold text-gray-300">
          {product.name}
        </h1>
        <span className="mt-4 leading-[140%] text-2xl font-normal text-green-300">
          {price?.unit_amount
            ? new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price.unit_amount / 100)
            : 'N/A'}
        </span>
        <p className="mt-10 text-md leading-[160%] text-gray-300">
          {product.description}

        </p>
        <BuyButton price={price} />
      </div>
    </main>
  )
}