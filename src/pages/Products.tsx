import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from 'use-http';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

function Products() {
  const navigate = useNavigate();
  const [ products, setProducts ] = React.useState<Product[]>([]);
  const {  get, response } = useFetch()

  const getProducts = React.useCallback(
    async () => {
      const products = await get('/products');
      if (response.ok) setProducts(products);
    }, [ get, response ]
  )

  React.useEffect(
    () => {
      getProducts();
    }, []
  )

  return (
    <div>
      <ul>
        {
          products.map(
            (p) => {
              return(
                <li key={ p.id }>
                  <div onClick={() => navigate(`/products/${ p.id }`)} >
                    {
                      p.title
                    }
                    {
                      p.price
                    }
                    {
                      p.description
                    }
                  </div>
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  );
}

export default Products;
