import useCatSays from "./hooks/useCatSays"

function App() {

  const { fact , result , firstWord , obtenerFact} = useCatSays()

  return (
    <main style={{display:'grid',gap:'2rem'}} className="container">
      <div>
        <p>
          {fact}
        </p>
        <p style={{fontWeight:'700' , fontSize:'2rem'}}>{firstWord}</p>
        <button 
          onClick={()=>obtenerFact()}
          style={{ paddingBlock:'1rem' , paddingInline:'2.5rem' , backgroundColor:'blue', color:'white',textTransform:'uppercase'}}>Nueva Consulta</button>
      </div>
      <img style={{marginInline:'auto',objectFit:'cover' , display:'block' , maxWidth:'600px'}} src={result} alt="image image-result" />
    </main>
  )
}

export default App
