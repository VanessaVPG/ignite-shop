import { Suspense } from "react";
import Carousel from "./components/Carousel"
import Loading from "./loading";
import { stripe } from "./lib/stripe";
import Stripe from "stripe";

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
      price: price?.unit_amount ? price.unit_amount / 100 : 0,
      description: product.description || '',
    }
  })
  return (
      <Suspense fallback={<Loading />}>
       <Carousel products={products} />
      </Suspense>
  );
}