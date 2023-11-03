export default function Page({params}: {params: {id: string}}) {
  return (
    <main>
      <h1>Produto: {params.id}</h1>
    </main>
  )
}