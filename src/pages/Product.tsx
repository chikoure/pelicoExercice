import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'use-http';
import { useShoppingContext } from '../contexts/ShoppingContext';
import { Product } from './Products';

function ProductPage() {
  const { addToCart } = useShoppingContext();
  const [ product, setProduct ] = React.useState<Product>()
  const {  get, response } = useFetch()
  const { id } = useParams();

  const getSingleProduct = React.useCallback(
    async (id: string) => {
      const product = await get(`/products/${ id }`)
      if (response.ok) setProduct(product)
    }, [get, response]
  )

  React.useEffect(
    () => {
      if (id) {
        getSingleProduct(id)
      }
    }, []
  )
  return (

    <div>
      {
        product &&
        <>
          <div>
            {
              product.title
            }
            {
              product.price
            }
            {
              product.description
            }
          </div>
          <button onClick={ () => addToCart(product)}>Add to cart </button>
        </>
      }
    </div>
  );
}

export default ProductPage;
