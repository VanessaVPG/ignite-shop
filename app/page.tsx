import { Suspense } from "react";
import Carousel from "./components/Carousel"
import { stripe } from "./lib/stripe";
import Stripe from "stripe";
import Loading from "./loading";

export default async function Home() {

  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
    name: product.name,
    image: product.images[0],
    price: price?.unit_amount
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format( price.unit_amount / 100)
      : 'N/A',
    description: product.description || '',
    }
  })
  return (
    <Suspense fallback={<Loading/>}>

      <Carousel products={products} />
    </Suspense>
  );
}