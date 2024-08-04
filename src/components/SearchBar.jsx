import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
    if (text === null) {
      setError(true);
    }
    onSearch(e.target.value);
  };
  return (
    <div className="flex w-full justify-center space-x-4">
      <input
        type="text"
        placeholder="Buscar..."
        value={text}
        onChange={handleInputChange}
        className="w-[40rem] rounded px-4 py-1 text-gray-800 outline-none"
      />
      {error ? (
        <p className="text-red-600">no se encontraron resultados</p>
      ) : null}
      <button
        onClick={() => onSearch(text)}
        className="rounded bg-slate-200 px-2 py-1 font-semibold text-gray-800"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
