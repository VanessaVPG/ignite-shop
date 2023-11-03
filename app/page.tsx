import Product from "./components/Product";
import { products } from "./lib/products";

export default function Home() {
  return (
    <main className="flex gap-12 calc-max-width ml-auto min-h-[41rem]">
      {
        products.map((product) => {
          return (
            <Product src={product.src} key={product.id} name={product.name} price={product.price}/>
          )
        }

        )
      }
    </main>
  )
}
