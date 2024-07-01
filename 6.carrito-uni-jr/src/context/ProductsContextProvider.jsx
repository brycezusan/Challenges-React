import { createContext, useEffect, useMemo, useState } from "react";
import { getProducts } from "../services";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

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

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const filterProducts = useMemo(
    () =>
      query
        ? productos.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        : productos,
    [query, productos]
  );

  const isEmpty = filterProducts.length === 0;

  return (
    <ProductsContext.Provider
      value={{
        productos: filterProducts,
        loading,
        isEmpty,
        handleChangeQuery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
