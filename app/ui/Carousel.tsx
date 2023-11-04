'use client'
import { useKeenSlider } from "keen-slider/react"
import { products } from "../lib/products"
import { Product } from "./Product"
import 'keen-slider/keen-slider.min.css'

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    slides:
    {
      spacing: 48,
      perView: 2,
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
