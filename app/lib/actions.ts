import axios from "axios";

export async function handleBuyProduct(id: string) {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/checkout',
      {
        priceId: id,
      },
    )
    const { checkoutUrl } = response.data
    window.location.href = checkoutUrl

  } catch (error) {
    console.log(error)
  }
};