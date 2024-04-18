export default function ListMovies({movies}) {
  return (
    <section className="grid">
      {movies?.map((movie) => (
        <div key={movie.imdbID} className="card center">
          <img
            className="movie-img"
            src={movie.Poster}
            alt={`poster-movie-${movie.Title}`}
          />
          <div>
            <p className="movie-title">{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
