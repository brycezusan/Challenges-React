import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const isEmpty = productos.length === 0;

  const obtenerProducts = async () => {
    try {
      setLoading(true);
      const productos = await getProducts();
      setProductos(productos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productos,
        loading,
        isEmpty,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
