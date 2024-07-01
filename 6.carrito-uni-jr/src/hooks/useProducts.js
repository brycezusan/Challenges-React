import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContextProvider"

export const useProducts = () => {
 
  const contexto = useContext(ProductsContext)

  if(!contexto){
    throw new Error('useProducts debe estar dentro de ProductsContextProvider')
  }

  return contexto;
}