import { useContext } from "react"
import { OrderContext } from "../context/OrderContextProvider"

export const useOrder = ()=>{
  const contexto = useContext(OrderContext)

  if(!contexto){
    throw new Error('useOrder debe estar dentro de OrderContextProvider')
  }

  return contexto
}