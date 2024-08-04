import MoviesCard from "./MoviesCard";

const MoviesGrid = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-2xl">No se encontraron resultados</p>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-2 gap-20 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
