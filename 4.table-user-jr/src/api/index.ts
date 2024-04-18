export const getUsers = async (page:number)=>{
  const url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc`;
    
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error('Error al conectar con la url')
    const data = res.json()
    return data
  } catch (error) {
    console.log(error)
  }

}