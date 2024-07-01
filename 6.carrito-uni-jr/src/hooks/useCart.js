import { useContext } from "react"
import { CartContext } from "../context/CartContextProvide"

export const useCart = ()=>{
  const contexto = useContext(CartContext)

  if(!contexto){
    throw new Error('useCart debe estar dentro de CartContextProvider')
  }

  return contexto
}