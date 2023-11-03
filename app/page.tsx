'use client';
import Product from "./components/Product";
import { products } from "./lib/products";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:
    {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <main ref={sliderRef} className="keen-slider flex calc-max-width ml-auto min-h-[41rem]">
      {
        products.map((product) => {
          return (
            <Product className="keen-slider__slide" src={product.src} key={product.id} name={product.name} price={product.price} />
          )


        }

        )
      }
    </main>
  )
}
