import Image from "next/image";
import Link from "next/link";

export default function Sucess() {
  return (
    <main className="flex flex-col items-center justify-center max-w-[1180px] w-full my-0 mx-auto h-[656px]">
      <h1 className="font-bold text-2xl leading-[140%] text-gray-100">Compra efetuada</h1>
      <div className="w-32 h-36 bg-gradient rounded-lg p-1 flex items-center justify-center mt-16">
        {/* <Image src={} alt="" width={}></Image> */}
      </div>
      <p className="text-xl text-gray-300 max-w-[560px] text-center mt-8">Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.</p>
      <Link href="/" className="mt-[88px] transition-all text-green-500 font-bold text-lg hover:text-green-300">
          Voltar ao catálogo
      </Link>
    </main>
  )
}