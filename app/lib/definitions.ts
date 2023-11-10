export interface ProductsProps {
  products: {
    id: string,
    name: string,
    price: string,
    image: string,
    description: string,
  }[]
}