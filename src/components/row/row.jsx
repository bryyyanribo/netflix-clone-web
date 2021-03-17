import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import LazyImage from "../lazy-image/lazy-image";
import "./row.scss";
const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState({
    data: [],
    loading: true,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setMovies({ data: response.data.results, loading: false });
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
        {movies.data.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <LazyImage
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
