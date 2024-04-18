const key = import.meta.env.VITE_API_KEY

export const obtenerDataMovie = async({query})=>{
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${query}`

  try{
    const res =  await fetch(url)  
    if(!res.ok) throw new Error('Error al conectar con la URL')
    const {Search} =  await res.json()
    return Search
  } catch (error) {
    console.log(error)
  }
}