import { useState , useEffect } from "react"
import { getCatFact } from "../api"

export default function useCatSays(){
  const [fact, setFact] = useState(null)
  const [result , setResult] = useState(null)
  const [firstWord , setFirstWord] = useState('')

  
  useEffect(()=>{
    obtenerFact()
  },[])

  const obtenerFact = async()=>{
    const {fact , resultado , firstWord} = await getCatFact()
    setFact(fact)
    setResult(resultado)
    setFirstWord(firstWord)
  }


  return { fact , result , firstWord , obtenerFact}
}