import React, { ReactNode } from 'react';
import { Product } from '../pages/Products';


function noop(): void {}

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingContext {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  deleteFromCart: (product: CartItem) => void;
  getCartQuantity: () => number;
}

const defaultShoppingContext = {
  cartItems: [],
  addToCart: noop,
  deleteFromCart: noop,
  getCartQuantity: () => 0
}

const ShoppingContext = React.createContext<ShoppingContext>(defaultShoppingContext)

export const useShoppingContext = () => React.useContext(ShoppingContext);

interface ShoppingContextProviderProps {
  children: ReactNode;
}
function ShoppingContextProvider({ children }: ShoppingContextProviderProps) {
  const [ cartItems, setCartItems ] = React.useState<CartItem[]>([])
  const addToCart = (product: Product) => {
    setCartItems(currenCartItems => {
      const itemInCart = currenCartItems.find(item => item.id === product.id);
      if (itemInCart === undefined) {
        return [ ...currenCartItems, { ...product, quantity: 1 }]
      } else {
        return currenCartItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      }
    })
  }

  const deleteFromCart = (product: CartItem) => {
    setCartItems(currenCartItems => {
      return currenCartItems.reduce<CartItem[]>(
        (acc, item) => {
          if (item.id !== product.id) return [ ...acc, item ]
          if (item.quantity > 1) {
            return [ ...acc, { ...item, quantity: item.quantity - 1 }]
          }
          return acc;
        }, []
      )
    })
  }

  const getCartQuantity = () => cartItems.reduce<number>((acc, item) => acc + item.quantity, 0)
  return (
    <ShoppingContext.Provider value={{ cartItems, addToCart, deleteFromCart, getCartQuantity }}>
      { children }
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextProvider;
