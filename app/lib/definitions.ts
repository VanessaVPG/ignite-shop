export interface ProductsProps {
  products: {
    id: string,
    name: string,
    price: string,
    image: string,
    description: string,
  }[]
}

export interface searchParamsProps {
  session_id: string
  

}