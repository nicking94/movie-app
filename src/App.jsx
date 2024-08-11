import { useState } from "react";
import MoviesGrid from "./components/MoviesGrid";
import SearchBar from "./components/SearchBar";
import movies from "./movies.json";
import Pagination from "./components/Pagination";

function App() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const handleSearch = (text) => {
    setSearch(text);
    setCurrentPage(1);
    if (text === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase()),
      );

      setFilteredMovies(filtered);
    }
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie,
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="min-h-[100vh] space-y-8 bg-slate-900 text-white">
        <header className="p-2">
          <h1 className="text-center text-[3rem] font-bold italic">
            Listado de películas
          </h1>
        </header>
        <main className="px-10">
          <div className="mb-10 flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
          <MoviesGrid movies={currentMovies} />
          <div className="p-2">
            <Pagination
              moviesPerPage={moviesPerPage}
              totalMovies={filteredMovies.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
