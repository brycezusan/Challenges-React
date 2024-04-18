export default function Search({
  handleSubmit,
  handleChange,
  idMovie,
  query,
  error,
  sort,
  setSorted
}) {
  return (
    <form onSubmit={handleSubmit} className="flex">
      <div>
        <label htmlFor={idMovie}>Nombre de Pelicula</label>
        <div style={{display:'flex' , alignItems:'center'}}>
          <input
            id={idMovie}
            type="text"
            placeholder="Ultraman , avatar , marvel..."
            onChange={handleChange}
            value={query}
          />
          <input type="checkbox" checked={sort} onChange={()=>setSorted(!sort)}/>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
      <input type="submit" value="buscar" />
    </form>
  );
}
