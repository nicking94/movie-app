const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center py-4">
      <nav className="space-x-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`rounded px-4 py-2 ${currentPage === number ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-800"} transition duration-300`}
          >
            {number}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
