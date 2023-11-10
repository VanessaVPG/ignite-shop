'use client'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import { Product } from './Product'
import { ProductsProps } from "../lib/definitions"
import Link from "next/link"



export default function Carousel({ products }: ProductsProps) {
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
            <Link href={`/product/${product.id}`} key={product.id} prefetch>
            <Product className="keen-slider__slide" src={product.image} name={product.name} price={product.price} />
            </Link> 
          )


        }

        )
      }
    </main>
  )
}
