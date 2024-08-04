const MoviesCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <li className="cursor-pointer rounded transition-all duration-300 hover:bg-slate-200 hover:text-gray-800">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="transiton-all h-[15rem] w-full rounded duration-500 hover:scale-105"
        />
      </div>

      <div className="flex min-h-[5rem] items-center justify-center">
        <p className="text-center text-[1.5rem] font-semibold">{movie.title}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
