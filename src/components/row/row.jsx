import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./row.scss";
const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
