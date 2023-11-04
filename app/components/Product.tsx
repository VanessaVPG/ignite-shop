import Image from 'next/image'
import camiseta from '@/public/assets/camisetas/camiseta-1.png'

interface ProductProps {
  name: string,
  src: string,
  price: number,
  className: string
}
export default function Product({ src, name, price, className }: ProductProps) {
  const blurDataURL = 'L009jvj[ayayj[j[ayayj[j[ayay';
  return (
    <section className={`group relative flex items-center justify-center rounded-lg bg-gradient shadow-lg overflow-hidden p-1 cursor-pointer min-w-max ${className}`}>
    <Image src={src} width={480} height={520} alt='camiseta' className='mx-20' placeholder='blur' blurDataURL={blurDataURL} />
      <footer className='absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-opacity-60 bg-black p-8 translate-y-[110%] opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100'>
        <strong className='text-lg'>{name}</strong>
        <span className='text-xl font-bold text-green-300'>{price}</span>
      </footer>
    </section>
  )
}