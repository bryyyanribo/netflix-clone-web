import React, { useEffect, useState } from "react";
import "./banner.scss";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const getRandomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];
      setMovie(getRandomMovie);
    } catch (e) {
      throw e;
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
