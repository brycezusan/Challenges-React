
export const getCatFact = async()=>{
  const url = `https://catfact.ninja/fact`
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error al contectar con la url')
    const {fact} = await  res.json()
     
    const firstWord= fact.split(' ' , 3).join(' ')
    const resultado = await getSayWord(firstWord)
    return {firstWord , resultado , fact}
  } catch (error) {
    console.log(error)    
  }
}

export const getSayWord =async (word)=>{
  const url = `https://cataas.com/cat/says/${word}`
  const {url:saysUrl} =await fetch(url)
  return saysUrl
}
