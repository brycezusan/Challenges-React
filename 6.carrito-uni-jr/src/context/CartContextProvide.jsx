import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const initalState = () => {
    const cartStorage = localStorage.getItem("cart");
    return cartStorage ? JSON.parse(cartStorage) : [];
  };

  const [cart, setCart] = useState(initalState());

  const totalProductsInCart = cart.length;
  const subtotal = useMemo(() => cart.reduce(
    (acc, product) => acc + (product.price * product.quantity),
    0
  ), [cart]);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const { id } = product;
    const productInCart = cart.findIndex((item) => item.id === id);

    if (productInCart >= 0) {
      cart[productInCart].quantity++;
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newProduct]);
    }
  };

  const removeProduct = (id) => {
    const confirm = window.confirm(
      "¿Estas seguro que deseas eliminar este producto?"
    );

    if (!confirm) return;
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const updateProduct = ({ id, quantity }) => {
    const productInCart = cart.findIndex((item) => item.id === id);
    if (productInCart >= 0) {
      const newCarrito = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity,
          };
        } else {
          return product;
        }
      });

      setCart(newCarrito);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };


  const checkProduct = (id) => {
    return cart.find((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        totalProductsInCart,
        addToCart,
        removeProduct,
        updateProduct,
        checkProduct,
        subtotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
